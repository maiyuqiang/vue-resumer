<template>
    <div id="topbar">
        <div class="logo">
            VueResumer
        </div>
        <div class="actions">
            <el-button type="success" class="register" size="mini">注册</el-button>
            <el-button type="primary" class="login" size="mini">登录</el-button>
        </div>
    </div>
</template>

<style lang='scss'>
    #topbar{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px;
        font-size: 20px;
        box-shadow:0 0 10px rgb(160, 160, 160);
    }
</style>

