<template>
    <div>
        <!-- 여기에 있는 데이터를 vuex로 관리-->
        <span>{{$route.params.userId}}님 환영합니다</span>
        <table>
            <tr>
                <th>no</th>
                <th>title</th>
                <th>date</th>
            </tr>
            <tr>
                <td>a</td>
                <td>b</td>
                <td>c</td>
            </tr>
        </table>
    </div>
</template>


<script>
export default {
  name: "board",
  mounted() {

  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}
</style>
