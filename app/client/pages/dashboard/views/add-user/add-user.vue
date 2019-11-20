<template>
    <div>
        <ul class="add-user">
            <li>
                <span class="ti">userid</span>
                <span class="nr"><el-input v-model="params.userid" ></el-input></span>
            </li>
            <li>
                <span class="ti">password</span>
                <span class="nr"><el-input v-model="params.password" ></el-input></span>
            </li>
            <li>
                <span class="ti">phone</span>
                <span class="nr"><el-input v-model="params.phone" ></el-input></span>
            </li>
            <li>
                <span class="ti">gender</span>
                <span class="nr"><el-input v-model="params.gender" ></el-input></span>
            </li>
            <li>
                <span class="ti">birth</span>
                <span class="nr"><el-input v-model="params.birth" ></el-input></span>
            </li>
            <li>
                <span class="ti">avatar</span>
                <span class="nr"><el-input v-model="params.avatar" ></el-input></span>
            </li>
            <li>
                <span class="ti">authority</span>
                <span class="nr"><el-input v-model="params.authority" ></el-input></span>
            </li>
            <li>
                <span class="ti">name</span>
                <span class="nr"><el-input v-model="params.name" ></el-input></span>
            </li>
        </ul>
        <el-button type="primary" @click="handleSubmit">提交</el-button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            params: {
                userid: '',
                password: '',
                phone: '',
                gender: '',
                birth: '',
                avatar: '',
                authority: '',
                name: '',
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$curl({
                url: '/api/addUser',
                data: this.params,
            }).then(({data}) => {
                
            }).catch(error => {console.log(error);})
        }
    }
}
</script>

<style lang="less">
.add-user{
    >li {
        display: flex;
        .ti{
            width: 100px;
            line-height: 36px;
        }
        .nr{
            flex: 1;
        }
    }
}
</style>