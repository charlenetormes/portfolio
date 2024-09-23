<template>
    <div class="relative w-full h-full">
        <canvas ref="gameCanvas" class="w-full h-full rounded-lg"></canvas>
        <div
            class="absolute top-0 w-full h-full flex flex-col gap-3 justify-center items-center"
        >
            <button
                v-if="gameOver && !havePlayed"
                @click="startGame"
                type="button"
                class="max-w-40 rounded-md bg-accent-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                start-game
            </button>
            <div
                v-if="!winner && gameOver && havePlayed"
                class="w-full flex items-center justify-center bg-primary-200 min-h-[48px] text-white"
            >
                <span class="text-white mx-auto">GAME OVER!</span>
            </div>
            <button
                v-if="!winner && gameOver && havePlayed"
                @click="startGame"
                type="button"
                class="max-w-40 rounded-md bg-accent-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                restart-game
            </button>
            <div
                v-if="winner && gameOver && havePlayed"
                class="w-full flex items-center justify-center bg-primary-200 min-h-[48px] text-white"
            >
                <span class="text-white mx-auto">WELL DONE!</span>
            </div>
            <button
                v-if="winner && gameOver && havePlayed"
                @click="startGame"
                type="button"
                class="max-w-40 rounded-md bg-accent-100 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                play-again
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["updateFood"]);

const gameCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

const snake: { x: number; y: number }[] = [{ x: 5, y: 5 }];
let direction = { x: 1, y: 0 };
let food = { x: 5, y: 5 };
let gridSize = 10;
let tileCountX = 30;
let tileCountY = 30;
let gridSizeX = 0;
let gridSizeY = 0;
const havePlayed = ref(false);
const gameOver = ref(true);
const gamePlaying = ref(false);
const winner = ref(false);
const foodLeft = ref(10);

const startGame = () => {
    winner.value = false;
    havePlayed.value = true;
    foodLeft.value = 10;
    emits("updateFood", foodLeft.value);
    gamePlaying.value = true;
    gameOver.value = false;
    direction = { x: 1, y: 0 };
    snake.splice(0, snake.length, { x: 5, y: 5 });
    food = {
        x: Math.floor(Math.random() * tileCountX),
        y: Math.floor(Math.random() * tileCountY),
    };
    gameLoop();
};

const gameLoop = () => {
    if (gameOver.value) {
        gamePlaying.value = false;
        return;
    }

    setTimeout(() => {
        update();
        draw();
        requestAnimationFrame(gameLoop);
    }, 100);
};

const update = () => {
    const head = { ...snake[0] };
    head.x += direction.x;
    head.y += direction.y;

    if (
        head.x < 0 ||
        head.x >= tileCountX ||
        head.y < 0 ||
        head.y >= tileCountY
    ) {
        gameOver.value = true;
    }

    // Check for collision with the snake's body
    for (const segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver.value = true;
        }
    }

    // Move the snake
    snake.unshift(head);

    // Check for eating food
    if (head.x === food.x && head.y === food.y) {
        food = {
            x: Math.floor(Math.random() * tileCountX),
            y: Math.floor(Math.random() * tileCountY),
        };

        foodLeft.value--;
        emits("updateFood", foodLeft);

        if (foodLeft.value === 0) {
            gameOver.value = true;
            winner.value = true;
        }
    } else {
        snake.pop();
    }
};

const draw = () => {
    if (!ctx) return;
    ctx.clearRect(
        0,
        0,
        gameCanvas.value?.width || 0,
        gameCanvas.value?.height || 0
    );

    // Draw snake
    ctx.fillStyle = "#43D9AD";
    for (const segment of snake) {
        ctx.fillRect(
            segment.x * gridSizeX,
            segment.y * gridSizeY,
            gridSizeX,
            gridSizeY
        );
    }

    // Draw food
    ctx.fillStyle = "yellow";
    ctx.fillRect(food.x * gridSizeX, food.y * gridSizeY, gridSizeX, gridSizeY);
};

onMounted(() => {
    if (gameCanvas.value) {
        ctx = gameCanvas.value.getContext("2d");
    }

    gridSizeX = gameCanvas.value?.width! / tileCountX;
    gridSizeY = gameCanvas.value?.height! / tileCountY;

    window.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                if (direction.y === 0) direction = { x: 0, y: -1 };
                break;
            case "ArrowDown":
                if (direction.y === 0) direction = { x: 0, y: 1 };
                break;
            case "ArrowLeft":
                if (direction.x === 0) direction = { x: -1, y: 0 };
                break;
            case "ArrowRight":
                if (direction.x === 0) direction = { x: 1, y: 0 };
                break;
        }
    });
});
</script>
