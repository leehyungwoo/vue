var res_util = {
    alert_back (res,msg) {
        var script = '<script type="text/javascript">alert("'+msg+'");history.back();</script>';
        res.send(script);
        res.end();
        return false;
    },
    alert_err (res,msg) {
        var script = '<script type="text/javascript">alert("'+msg+'");history.back();</script>'
        res.send(script);
        res.end();
        return false;
    },
    alert_page (res,msg,page) {
        var script = '<script type="text/javascript">alert("'+msg+'");location.href="'+page+'";</script>'
        res.send(script);
        res.end();
        return false;
    },
    res_render (res,data,page) {
        res.render(page, data);
        res.end();
        return false;
    },
    json_data (res,data) {
        res.status(200).json(data);
        res.end();
        return false;
    },
    json_msg (res,data) {
        res.status(200).json(data);
        res.end();
        return false;
    }
} 

module.exports = res_util