function scrollIntoView () {
  window.scrollTo(0, 0)
}

setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);

setTimeout(() => {
  document.querySelectorAll('.bottom-bar').forEach(element => {
    element.style.bottom = -autoScaleInfo.hideHeight + 'px'
  });
  document.querySelectorAll('.pannel').forEach(element => {
    element.style.top = -autoScaleInfo.hideHeight + 'px'
  });
}, 100);


layui.use(['element','jquery', 'form','upload','layer'], function() {
  var $ = layui.jquery, form = layui.form;
  let layer = layui.layer;
  let upload = layui.upload;
  $.ajax({
      type:'get',
      url: "http://49.232.216.171:8080/brand/all",
      success:function(data){
          for (let i = 0; i < data.data.length; i++) {
              $('#brand').append(' <option value='+data.data[i].value+'>'+data.data[i].value+'</option>');
          }
          form.render('select');
      }
  });
  $.ajax({
      type:'get',
      url: "http://49.232.216.171:8080/condition/all",
      success:function(data){
          for (let i = 0; i < data.data.length; i++) {
              $('#condition').append(' <option value='+data.data[i].value+'>'+data.data[i].value+'</option>');
          }
          form.render('select');
      }
  });
  $.ajax({
      type:'get',
      url: "http://49.232.216.171:8080/network/all",
      success:function(data){
          for (let i = 0; i < data.data.length; i++) {
              $('#network').append(' <option value='+data.data[i].value+'>'+data.data[i].value+'</option>');
          }
          form.render('select');
      }
  });
  $.ajax({
      type:'get',
      url: "http://49.232.216.171:8080/edition/all",
      success:function(data){
          for (let i = 0; i < data.data.length; i++) {
              $('#edition').append(' <option value='+data.data[i].value+'>'+data.data[i].value+'</option>');
          }
          form.render('select');
      }
  });
  $.ajax({
      type:'get',
      url: "http://49.232.216.171:8080/imei/all",
      success:function(data){
          for (let i = 0; i < data.data.length; i++) {
              $('#imei').append(' <option value='+data.data[i].value+'>'+data.data[i].value+'</option>');
          }
          form.render('select');
      }
  });
  //监听搜索
  form.on('submit(commodityCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/commodity/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#depart-edit-form")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#depart-edit-form")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });
  form.on('submit(brandCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/brand/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#brandFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#brandFormId")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });
  form.on('submit(conditionCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/condition/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#conditionFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#conditionFormId")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });
  form.on('submit(editionCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/edition/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#editionFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#editionFormId")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });
  form.on('submit(imeiCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/imei/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#imeiFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#imeiFormId")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });
  form.on('submit(networkCommit)', function(data){
      var field = data.field;
      $.ajax({
          type:'post',
          url: "http://49.232.216.171:8080/network/add",
          datatype:'json',
          contentType:'application/json;charset=UTF-8',
          data:JSON.stringify(field),
          cache: false,
          success:function(data){
              layer.msg('保存成功！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#networkFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('失败！', {
                  time: 1000 //20s后自动关闭
              },function(){
                  $("#networkFormId")[0].reset();
                  form.render();
              });
          }
      });
      return false;
  });

  $("#dept-from-reset").on("click",function(){
      $("#depart-edit-form")[0].reset();
      form.render();
  })

  //多图片上传
  let imgListView = $('#imgList'),
      uploadListIns = upload.render({
          elem: '#checkImg',
          //改成自己的上传接口
          url: 'http://49.232.216.171:8080/uploadImg',
          accept: 'images',
          multiple: true,
          auto: false,
          bindAction: '#uploadAction',
          choose: function (obj) {

              let files = this.files = obj.pushFile();  //将每次选择的文件追加到文件队列
              uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
              //读取本地文件
              //data为携带的参数
              // this.data={'picUrl':$('#picUrlId').val()};
              obj.preview(function (index, file, result) {
                  let tr = $([
                      '<tr class="imgFiles" id="upload-' + index + '">'
                      , '<td>' + file.name + '</td>'
                      , '<td>' + (file.size / 1024).toFixed(1) + 'kb</td>'
                      , '<td>等待上传</td>', '<td>'
                      , '<button class="layui-btn layui-btn-xs img-reload layui-hide">重传</button>'
                      , '<button class="layui-btn layui-btn-xs layui-btn-danger img-delete">删除</button>'
                      , '</td>'
                      , '</tr>'
                  ].join(''));

                  //单个重传
                  tr.find('.img-reload').on('click', function () {
                      obj.upload(index, file);
                  });

                  //删除
                  tr.find('.img-delete').on('click', function () {
                      delete files[index]; //删除对应的文件
                      tr.remove();
                      uploadListIns.config.elem.next()[0].value = ''; //清空 input file 值，以免删除后出现同名文件不可选
                  });

                  imgListView.append(tr);
              });
          },
          done: function (res, index, upload) {
              //console.log(typeof res);
              //console.log(res);

              if (res.code == 0) {  //上传成功
                  let tr = imgListView.find('tr#upload-' + index),
                      tds = tr.children();
                  tds.eq(2).html('<span style="color: #5FB878;">上传成功</span>');
                  tds.eq(3).html('<span id="imgPathSpan">' + res.imgPath + '</span>'); //清空操作
                  var picNow = $("#picUrlId").val();
                  $("#picUrlId").val(picNow+res.imgPath+';');
                  return delete this.files[index]; //删除图片队列已经上传成功的图片
              } else {
                  this.error(index, upload);
              }

          },
          error: function (index, upload) {
              let tr = imgListView.find('tr#upload-' + index),
                  tds = tr.children();
              tds.eq(2).html('<span style="color: #FF5722;">上传失败</span>');
              tds.eq(3).find('.img-reload').removeClass('layui-hide'); //显示重传
          }
      });

})
//表格处理
layui.use('table', function(){
  var $ = layui.jquery;
  var table = layui.table;
  //表格渲染
  table.render({
      elem: '#commodityTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/commodity/all' //数据接口
      // ,page: true //开启分页
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'name', title: '名称', width:60}
          ,{field: 'brand', title: '品牌', width:60}
          ,{field: 'condition', title: '条件', width:60}
          ,{field: 'network', title: '网络', width: 60}
          ,{field: 'edition', title: '版本', width: 60}
          ,{field: 'imei', title: 'imei串号', width: 60}
          ,{field: 'picUrl', title: '图片',align: 'center',templet: '#showScreenhost', width: 200,height:50}
          ,{title: '操作', width: 200, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#brandTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/brand/all' //数据接口
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '名称', width:200}
          ,{title: '操作', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#conditionTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/condition/all' //数据接口
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '名称', width:200}
          ,{title: '操作', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#editionTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/edition/all' //数据接口
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '名称', width:200}
          ,{title: '操作', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#imeiTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/imei/all' //数据接口
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '名称', width:200}
          ,{title: '操作', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#networkTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/network/all' //数据接口
      ,cols: [[ //表头
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '名称', width:200}
          ,{title: '操作', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  //删除按钮渲染
  table.on('tool(commodityTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/commodity/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/commodity/all'
                      });
                  }
              });
          });
      }else if(layEvent === 'update'){

      }
  });
  table.on('tool(brandTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/brand/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/brand/all'
                      });
                  }
              });
          });
      }
  });
  table.on('tool(conditionTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/condition/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/condition/all'
                      });
                  }
              });
          });
      }
  });
  table.on('tool(editionTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/edition/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/edition/all'
                      });
                  }
              });
          });
      }
  });
  table.on('tool(imeiTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/imei/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/imei/all'
                      });
                  }
              });
          });
      }
  });
  table.on('tool(networkTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('确定删除吗？', function(index){
              obj.del();
              layer.close(index);
              $.ajax({
                  type:'get',
                  url: "http://49.232.216.171:8080/network/delete?id="+data.id,
                  success:function(data){
                      table.reload('commodityTableId', {
                          url: 'http://49.232.216.171:8080/network/all'
                      });
                  }
              });
          });
      }
  });
  //表格刷新按钮渲染
  table.on('toolbar(commodityTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('commodityTableId', {
              url: 'http://49.232.216.171:8080/commodity/all'
          });
      };});
  table.on('toolbar(brandTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('brandTableId', {
              url: 'http://49.232.216.171:8080/brand/all'
          });
      };});
  table.on('toolbar(conditionTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('conditionTableId', {
              url: 'http://49.232.216.171:8080/condition/all'
          });
      };});
  table.on('toolbar(editionTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('editionTableId', {
              url: 'http://49.232.216.171:8080/edition/all'
          });
      };});
  table.on('toolbar(imeiTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('imeiTableId', {
              url: 'http://49.232.216.171:8080/imei/all'
          });
      };});
  table.on('toolbar(networkTable)', function(obj){
      if(obj.event === 'update'){
          table.reload('networkTableId', {
              url: 'http://49.232.216.171:8080/network/all'
          });
      };});
});