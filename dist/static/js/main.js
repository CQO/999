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
  //????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#depart-edit-form")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#brandFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#conditionFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#editionFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#imeiFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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
              layer.msg('???????????????', {
                  time: 1000 //20s???????????????
              },function(){
                  $("#networkFormId")[0].reset();
                  form.render();
              });
          },
          error:function(res){
              layer.msg('?????????', {
                  time: 1000 //20s???????????????
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

  //???????????????
  let imgListView = $('#imgList'),
      uploadListIns = upload.render({
          elem: '#checkImg',
          //???????????????????????????
          url: 'http://49.232.216.171:8080/uploadImg',
          accept: 'images',
          multiple: true,
          auto: false,
          bindAction: '#uploadAction',
          choose: function (obj) {

              let files = this.files = obj.pushFile();  //?????????????????????????????????????????????
              uploadListIns.config.elem.next()[0].value = ''; //?????? input file ????????????????????????????????????????????????
              //??????????????????
              //data??????????????????
              // this.data={'picUrl':$('#picUrlId').val()};
              obj.preview(function (index, file, result) {
                  let tr = $([
                      '<tr class="imgFiles" id="upload-' + index + '">'
                      , '<td>' + file.name + '</td>'
                      , '<td>' + (file.size / 1024).toFixed(1) + 'kb</td>'
                      , '<td>????????????</td>', '<td>'
                      , '<button class="layui-btn layui-btn-xs img-reload layui-hide">??????</button>'
                      , '<button class="layui-btn layui-btn-xs layui-btn-danger img-delete">??????</button>'
                      , '</td>'
                      , '</tr>'
                  ].join(''));

                  //????????????
                  tr.find('.img-reload').on('click', function () {
                      obj.upload(index, file);
                  });

                  //??????
                  tr.find('.img-delete').on('click', function () {
                      delete files[index]; //?????????????????????
                      tr.remove();
                      uploadListIns.config.elem.next()[0].value = ''; //?????? input file ????????????????????????????????????????????????
                  });

                  imgListView.append(tr);
              });
          },
          done: function (res, index, upload) {
              //console.log(typeof res);
              //console.log(res);

              if (res.code == 0) {  //????????????
                  let tr = imgListView.find('tr#upload-' + index),
                      tds = tr.children();
                  tds.eq(2).html('<span style="color: #5FB878;">????????????</span>');
                  tds.eq(3).html('<span id="imgPathSpan">' + res.imgPath + '</span>'); //????????????
                  var picNow = $("#picUrlId").val();
                  $("#picUrlId").val(picNow+res.imgPath+';');
                  return delete this.files[index]; //?????????????????????????????????????????????
              } else {
                  this.error(index, upload);
              }

          },
          error: function (index, upload) {
              let tr = imgListView.find('tr#upload-' + index),
                  tds = tr.children();
              tds.eq(2).html('<span style="color: #FF5722;">????????????</span>');
              tds.eq(3).find('.img-reload').removeClass('layui-hide'); //????????????
          }
      });

})
//????????????
layui.use('table', function(){
  var $ = layui.jquery;
  var table = layui.table;
  //????????????
  table.render({
      elem: '#commodityTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/commodity/all' //????????????
      // ,page: true //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'name', title: '??????', width:60}
          ,{field: 'brand', title: '??????', width:60}
          ,{field: 'condition', title: '??????', width:60}
          ,{field: 'network', title: '??????', width: 60}
          ,{field: 'edition', title: '??????', width: 60}
          ,{field: 'imei', title: 'imei??????', width: 60}
          ,{field: 'picUrl', title: '??????',align: 'center',templet: '#showScreenhost', width: 200,height:50}
          ,{title: '??????', width: 200, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#brandTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/brand/all' //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '??????', width:200}
          ,{title: '??????', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#conditionTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/condition/all' //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '??????', width:200}
          ,{title: '??????', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#editionTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/edition/all' //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '??????', width:200}
          ,{title: '??????', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#imeiTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/imei/all' //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '??????', width:200}
          ,{title: '??????', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  table.render({
      elem: '#networkTableId'
      ,height: 312
      ,toolbar: '#toolbarDemo'
      ,url: 'http://49.232.216.171:8080/network/all' //????????????
      ,cols: [[ //??????
          {field: 'id', title: 'ID', width:60, sort: true, fixed: 'left'}
          ,{field: 'value', title: '??????', width:200}
          ,{title: '??????', width: 100, templet: '#toolEventDemo',fixed: 'right'}
      ]]
  });
  //??????????????????
  table.on('tool(commodityTable)', function(obj){
      var data = obj.data;
      var layEvent = obj.event;
      if(layEvent === 'del'){
          layer.confirm('??????????????????', function(index){
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
          layer.confirm('??????????????????', function(index){
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
          layer.confirm('??????????????????', function(index){
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
          layer.confirm('??????????????????', function(index){
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
          layer.confirm('??????????????????', function(index){
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
          layer.confirm('??????????????????', function(index){
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
  //????????????????????????
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