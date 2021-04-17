$(function () {

	$("button[type=button]").click(function () {

	/* //////////////////////아이디 중복체크 시작////////////////////// */
		var inputID = $("#uID").val().trim();
		var regIDList = ["test01", "guest", "member03"];
		var idUseChk = true;

		$.each(regIDList, function (i, v) {
			if (inputID == v) {
				idUseChk = false;
			}
		});

		var msg = "";
		if (idUseChk) {
			msg = "사용가능";
		} else {
			msg = "사용중인 아이디";
		}

		var spanChk = $("#uID").next().is("span");
		/*alert(spanChk);*/
		if (spanChk) {
			$("span#idChkMsg").remove();
		}

		$("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");
	/* //////////////////////아이디 중복체크 시작////////////////////// */


	/*/////////// 비밀번호 일관성(=동일성)검사 일치여부 점검//////// /// */
		var uPW = $("#uPW").val().trim();
		var uPW_Re = $("#uPW_Re").val().trim();
		var pwChkMsg = "";

		if(uPW == uPW_Re) {
			pwChkMsg = "비밀번호 일치";
		}else {
			pwChkMsg = "비밀번호 불일치";
		}

		var pwSpanChk = $("#uPW_Re").next().is("span");
		if(pwSpanChk) {
			$("span#pwChkMsg").remove();
		}
		$("<span id='pwChkMsg'>" + pwChkMsg + "</span>").insertAfter("#uPW_Re");
	/*/////////// 비밀번호 일관성(=동일성)검사 일치여부 점검//////// /// */

	});


	/* ////////////입력취소 클릭이벤트 아이디,비밀번호 메시지 제거//////////// */

	$("button[type=reset]").click(function(){
		$("span#idChkMsg").remove();
		$("span#pwChkMsg").remove();
	});

	/* ////////////입력취소 클릭이벤트 아이디,비밀번호 메시지 제거//////////// */


	/* ////////////////////////////비밀번호 보기////////////////////////////*/
	$("input[type=checkbox]").click(function(){
		var chkTF = $(this).prop("checked");
		/*alert("checked : " + chkTF);*/
		if(chkTF) {
			$("input.uPW").attr("type", "text");
		}else {
			$("input.uPW").attr("type", "password");
		}
	});
	/* ////////////////////////////비밀번호 보기////////////////////////////*/


	/*//////////////////추가 내용(포커스 아웃 이벤트 적용)//////////////////*/
	$("#uID").focusout(function(){
		/* 아이디 중복 체크 시작 */
		var inputUID = $("#uID").val().trim();
		var regIDList = ["test01", "guest", "member03"];
		var idUseChk = true;

		var inputUID = $("#uID").val().trim();   // form화면에서 입력한 ID
        var regIDList = ["test01", "guest", "member03"];  // 가입된 ID를 의미

        var idUseChk = true;

        $.each(regIDList, function(i, v){
            if(inputUID == v) {
                idUseChk = false;
            }
        });

		var msg = "";
		if(idUseChk) {
			msg = "사용가능";
		}else {
			msg = "사용중인 아이디";
		}

		var spanChk = $("#uID").next().is("span");
		if(spanChk) {
			$("span#idChkMsg").remove();
		}
		$("<span id='idChkMsg'>" + msg + "</span>").insertAfter("#uID");
		/* 아이디 중복 체크 시작 */
	});
	/*//////////////////추가 내용(포커스 아웃 이벤트 적용)//////////////////*/

});





