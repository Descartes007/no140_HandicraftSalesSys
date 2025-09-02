const base = {
    get() {
        return {
            url : "http://localhost:8080/shouggonyipinxiaoshou/",
            name: "shouggonyipinxiaoshou",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/shouggonyipinxiaoshou/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "手工艺品销售系统"
        } 
    }
}
export default base
