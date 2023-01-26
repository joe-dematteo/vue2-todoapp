<template>
    <div>
        <div class="bar">
            <input placeholder="Search Todo's"/>
            <img src="/search.svg" alt="Search"/>
        </div>
        <hr />
    </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.bar {
    background: #292639;
    padding: 15px;
    border-radius: 10px;
    margin: 12px;
    margin-top: 20px;
    width: auto;
    display: flex;
}

input {
    background: #292639;
    border: 0;
    width: 100%;
}

input::placeholder {
    color: white;
    size: 14px;
}

hr {
    width: 20%;
    border: 2px solid #292639;
}
</style>