var data_util = {
    Validation (params,c_arr) {
        var Result = {code : "00" , msg : "정상" };
        for(var i = 0; i < c_arr.length; i++){
            var check_obj = c_arr[i].split("|");
            if(!params[check_obj[0]] || params[check_obj[0]] == "" || params[check_obj[0]] == undefined){
                Result.code = "99";
                Result.msg = check_obj[1] + "는 필수 입력값입니다.";
                break;
            }
        }
        return Result;
    }
} 

module.exports = data_util