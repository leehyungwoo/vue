<template>
  <div>
      <h1>연락처 상세</h1>
          <table>
              <tbody>
                  <tr>
                      <td>일련</td>
                      <td>{{contact.no}}</td>
                  </tr>
                  <tr>
                      <td>이름</td>
                      <td>{{contact.name}}</td>
                  </tr>
                  <tr>
                      <td>전화</td>
                      <td>{{contact.tel}}</td>
                  </tr>
                  <tr>
                      <td>주소</td>
                      <td>{{contact.address}}</td>
                  </tr>
              </tbody>
          </table>
  
  </div>
</template>


<script>
    import contactlist from '../Contactlist'
    export default{
        name:'contactbyno',
        data(){
            return {
                no:0,
                contacts:contactlist.contacts
            }
        },
        created(){
            this.no = this.$route.params.no;
     
        },
        computed:{
            contact(){
                var no = this.no;
                var arr = this.contacts.filter(function(item,index){
                    return item.no == no;
                }); 
                if(arr.length === 1 ){return arr[0]}
                else{ return {};}
            }
        }
    }
</script>