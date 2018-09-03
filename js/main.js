var audio;
var failsound = new Audio("media/sound/fail.mp3");
var stopCount = false;
// mode random
// 0 - all 1 - đến câu 20,
//  	2: từ 21 - 40, 3: từ 41 - 60, 4: từ 61 - 80, 5: từ 81 đến 101
var moderandom = 0;

//Hide Pause
$('#pause').hide();

//Initalize
initAudio($('#playlist li:first-child'));


	var sounds = new Array();
	sounds[0] = "Voice 101.m4a";
	sounds[1] = "Voice 001.m4a";
	sounds[2] = "Voice 002.m4a"; 
	sounds[3] = "Voice 003.m4a";
	sounds[4] = "Voice 004.m4a";
	sounds[5] = "Voice 005.m4a";
	sounds[6] = "Voice 006.m4a";
	sounds[7] = "Voice 007.m4a"; 
	sounds[8] = "Voice 008.m4a";
	sounds[9] = "Voice 009.m4a";
	sounds[10] = "Voice 010.m4a";

	sounds[11] = "Voice 011.m4a";
	sounds[12] = "Voice 012.m4a"; 
	sounds[13] = "Voice 013.m4a";
	sounds[14] = "Voice 014.m4a";
	sounds[15] = "Voice 015.m4a";
	sounds[16] = "Voice 016.m4a";
	sounds[17] = "Voice 017.m4a"; 
	sounds[18] = "Voice 018.m4a";
	sounds[19] = "Voice 019.m4a";
	sounds[20] = "Voice 020.m4a";

	sounds[21] = "Voice 021.m4a";
	sounds[22] = "Voice 022.m4a"; 
	sounds[23] = "Voice 023.m4a";
	sounds[24] = "Voice 024.m4a";
	sounds[25] = "Voice 025.m4a";
	sounds[26] = "Voice 026.m4a";
	sounds[27] = "Voice 027.m4a"; 
	sounds[28] = "Voice 028.m4a";
	sounds[29] = "Voice 029.m4a";
	sounds[30] = "Voice 030.m4a";

	sounds[31] = "Voice 031.m4a";
	sounds[32] = "Voice 032.m4a"; 
	sounds[33] = "Voice 033.m4a";
	sounds[34] = "Voice 034.m4a";
	sounds[35] = "Voice 035.m4a";
	sounds[36] = "Voice 036.m4a";
	sounds[37] = "Voice 037.m4a"; 
	sounds[38] = "Voice 038.m4a";
	sounds[39] = "Voice 039.m4a";
	sounds[40] = "Voice 040.m4a";

	sounds[41] = "Voice 041.m4a";
	sounds[42] = "Voice 042.m4a"; 
	sounds[43] = "Voice 043.m4a";
	sounds[44] = "Voice 044.m4a";
	sounds[45] = "Voice 045.m4a";
	sounds[46] = "Voice 046.m4a";
	sounds[47] = "Voice 047.m4a"; 
	sounds[48] = "Voice 048.m4a";
	sounds[49] = "Voice 049.m4a";
	sounds[50] = "Voice 050.m4a";

	sounds[51] = "Voice 051.m4a";
	sounds[52] = "Voice 052.m4a"; 
	sounds[53] = "Voice 053.m4a";
	sounds[54] = "Voice 054.m4a";
	sounds[55] = "Voice 055.m4a";
	sounds[56] = "Voice 056.m4a";
	sounds[57] = "Voice 057.m4a"; 
	sounds[58] = "Voice 058.m4a";
	sounds[59] = "Voice 059.m4a";
	sounds[60] = "Voice 060.m4a";

	sounds[61] = "Voice 061.m4a";
	sounds[62] = "Voice 062.m4a"; 
	sounds[63] = "Voice 063.m4a";
	sounds[64] = "Voice 064.m4a";
	sounds[65] = "Voice 065.m4a";
	sounds[66] = "Voice 066.m4a";
	sounds[67] = "Voice 067.m4a"; 
	sounds[68] = "Voice 068.m4a";
	sounds[69] = "Voice 069.m4a";
	sounds[70] = "Voice 070.m4a";

	sounds[71] = "Voice 071.m4a";
	sounds[72] = "Voice 072.m4a"; 
	sounds[73] = "Voice 073.m4a";
	sounds[74] = "Voice 074.m4a";
	sounds[75] = "Voice 075.m4a";
	sounds[76] = "Voice 076.m4a";
	sounds[77] = "Voice 077.m4a"; 
	sounds[78] = "Voice 078.m4a";
	sounds[79] = "Voice 079.m4a";
	sounds[80] = "Voice 080.m4a";

	sounds[81] = "Voice 081.m4a";
	sounds[82] = "Voice 082.m4a"; 
	sounds[83] = "Voice 083.m4a";
	sounds[84] = "Voice 084.m4a";
	sounds[85] = "Voice 085.m4a";
	sounds[86] = "Voice 086.m4a";
	sounds[87] = "Voice 087.m4a"; 
	sounds[88] = "Voice 088.m4a";
	sounds[89] = "Voice 089.m4a";
	sounds[90] = "Voice 090.m4a";

	sounds[91] = "Voice 091.m4a";
	sounds[92] = "Voice 092.m4a"; 
	sounds[93] = "Voice 093.m4a";
	sounds[94] = "Voice 094.m4a";
	sounds[95] = "Voice 095.m4a";
	sounds[96] = "Voice 096.m4a";
	sounds[97] = "Voice 097.m4a"; 
	sounds[98] = "Voice 098.m4a";
	sounds[99] = "Voice 099.m4a";
	sounds[100] = "Voice 100.m4a";
	sounds[101] = "Voice 101.m4a";
	var ques = new Array();
	ques[0] = "Câu 0: Hôm nay thầy không có hứng hỏi, em chỉ có 1 lựa chọn, đó là cút ra khỏi cuộc chơi!!!";
	ques[1] = "Câu 1: Phần mềm là gì? Nêu đặc trưng của nó. Có những loại ngôn ngữ nào để phát triển phần mềm? ";
	ques[2] = "Câu 2: Phân loại phần mềm và nội dung cơ bản mỗi loại.";
	ques[3] = "Câu 3: Định nghĩa kỹ nghệ phần mềm? Những yếu tố chủ chốt trong kỹ nghệ phần mềm là gì?";
	ques[4] = "Câu 4: Tiến trình phần mềm là gì? Mô hình tiến trình là gì? Hãy trình bày mô hình của một số tiến trình cơ bản. ";
	ques[5] = "Câu 5: Các bước tổng quát của tiến trình phần mềm gồm những giai đoạn nào? Nêu các hoạt động của tiến trình phần mềm và tài liệu mà nó sinh ra?";
	ques[6] = "Câu 6: Chất lượng phần mềm là gì? Các tiêu chí của chất lượng phần mềm.";
	ques[7] = "Câu 7: Có các dạng bảo trì nào? Nêu và phân biệt.";
	ques[8] = "Câu 8: Thế nào là refactoring?";
	ques[9] = "Câu 9: Thế nào là 'from scratch'?";
	ques[10] = "Câu 10: Thế nào là một episode?";

	ques[11] = "Câu 11: Thế nào là 1 artifact?";
	ques[12] = "Câu 12: Thế nào là portability của phần mềm?";
	ques[13] = "Câu 13: Thế nào là reusebility của phần mềm?";
	ques[14] = "Câu 14: Thế nào là một bản thiết kế còn ommision?";
	ques[15] = "Câu 15: Thế nào là một bản thiết kế còn contradiction?";
	ques[16] = "Câu 16: Thế nào là một phần mềm COTS (Commercial-off-the-self Software)?";
	ques[17] = "Câu 17: SPMP là viết tắt của từ gì? Ý nghĩa?";
	ques[18] = "Câu 18: Alpha release là gì? Khác gì với beta release?";
	ques[19] = "Câu 19: Beta release là gì? Khác gì với alpha release?";
	ques[20] = "Câu 20: process là gì? Khác gì với workflow?";

	ques[21] = "Câu 21: workflow là gì? Khác gì với process?";
	ques[22] = "Câu 22: Tại sao không có pha kiểm thử?";
	ques[23] = "Câu 23: Tại sao không có pha làm tài liệu?";
	ques[24] = "Câu 24: Tại sao không có pha lập kế hoạch? ";
	ques[25] = "Câu 25: Nếu không áp dụng các mô hình vòng đời phần mềm thì có phát triển được phần mềm không? Tại sao? ";
	ques[26] = "Câu 26: Tại sao người ta phải dùng nhiều mô hình vòng đời khác nhau để phát triển phần mềm? ";
	ques[27] = "Câu 27: Nêu ưu điểm, nhược điểm của mô hình vòng  đời phần mềm kiểu thác nước?";
	ques[28] = "Câu 28: Mô hình vòng đời phần mềm kiểu thác nước thì phù hợp với những dự án có đặc điểm gì?";
	ques[29] = "Câu 29: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu bản mẫu nhanh?";
	ques[30] = "Câu 30: Mô hình vòng đời phần mềm kiểu bản mẫu nhanh thì phù hợp với những dự án có đặc điểm gì?";
	
	ques[31] = "Câu 31: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu lặp và tăng trưởng?";
	ques[32] = "Câu 32: Mô hình vòng  đời phần mềm kiểu lặp và tăng trưởng thì phù hợp với những dự án có đặc điểm gì?";
	ques[33] = "Câu 33: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu xoắn ốc?";
	ques[34] = "Câu 34: Mô hình vòng đời phần mềm kiểu xoắn ốc thì phù hợp với những dự án có đặc điểm gì?";
	ques[35] = "Câu 35: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu ổn định và đồng bộ hóa?";
	ques[36] = "Câu 36: Mô hình vòng đời phần mềm kiểu ổn định và đồng bộ hóa thì phù hợp với những dự án có đặc điểm gì?";
	ques[37] = "Câu 37: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu mã nguồn mở? ";
	ques[38] = "Câu 38: Mô hình vòng đời phần mềm kiểu mã nguồn mở thì phù hợp với những dự án có đặc điểm gì?";
	ques[39] = "Câu 39: Nêu ưu điểm, nhược điểm của mô hình vòng đời phần mềm kiểu tiến trình linh hoạt?";
	ques[40] = "Câu 40: Mô hình vòng  đời phần mềm kiểu tiến trình linh hoạt thì phù hợp với những dự án có đặc điểm gì?";

	ques[41] = "Câu 41: Tại sao trong mô hình tiến trình linh hoạt, không cần có pha đặc tả? ";
	ques[42] = "Câu 42: Trong mô hình tiến trình liên hoạt, luôn có đại diện của khác hàng trong nhóm phát triển thì có ưu điểm gì?";
	ques[43] = "Câu 43: Ưu nhược điểm của mô hình nhóm code bình đẳng (Democratic Team) :";
	ques[44] = "Câu 44: Mô hình nhóm code bình đẳng thì phù hợp với những dự án có đặc điểm gì?";
	ques[45] = "Câu 45: Ưu nhược điểm của mô hình nhóm code có chief (Chief Programmer Team) :";
	ques[46] = "Câu 46: Mô hình nhóm code có chef thì phù hợp với những dự án có đặc điểm gì ?";
	ques[47] = "Câu 47: Ưu nhược điểm của kĩ thuật Pair-programming : ";
	ques[48] = "Câu 48: Ưu nhược điểm của kĩ thuật time boxing : ";
	ques[49] = "Câu 49: Ưu nhược điểm của kĩ thuật stand-up meeting :";
	ques[50] = "Câu 50: Nêu ưu điểm, nhược điểm của phương pháp ước lượng phần mềm bằng LOC (Lines of code) ?";
	
	ques[51] = "Câu 51: Nêu ưu điểm, nhược điểm của phương pháp ước lượng phần mềm bằng FFP?";
	ques[52] = "Câu 52: Nêu ưu điểm, nhược điểm của phương pháp ước lượng phần mềm bằng Function Point?";
	ques[53] = "Câu 53: Nêu ưu, nhược điểm của phương pháp ước lượng phần mềm bằng COCOMO?";
	ques[54] = "Câu 54: Luật Miller trong CNPM nói gì ? ";
	ques[55] = "Câu 55: Luật Brooks trong CNPM nói gì ?";
	ques[56] = "Câu 56: Luật Dijkstra trong CNPM nói gì ?";
	ques[57] = "Câu 57: Ý nghĩa của scenario và ngoại lệ ?";
	ques[58] = "Câu 58: Ý nghĩa của sơ đồ tuần tự ?";
	ques[59] = "Câu 59: Ý nghĩa của sơ đồ lớp ?";
	ques[60] = "Câu 60: Thế nào là lớp giao diện ? Lớp này thường tương tác với các lớp nào ? ";

	ques[61] = "Câu 61: Thế nào là lớp điều khiển, lớp này tương tác với những lớp nào? ";
	ques[62] = "Câu 62: Thế nào là lớp thực thể, lớp này tương tác với những lớp nào?";
	ques[63] = "Câu 63: Scenario và sơ đồ tuần tự có liên hệ gì đến nhau?";
	ques[64] = "Câu 64: Scenario và sơ đồ lớp có quan hệ gì đến nhau?";
	ques[65] = "Câu 65: Việc trích lớp và xây dựng các lớp là của pha thiết kế, tại sao người ta làm nó ngay trong pha phân tích?";
	ques[66] = "Câu 66: Kỹ thuật trích danh từ dùng để trích các lớp nào? Có thể dùng để trích lớp biên và lớp điều khiển được không?";
	ques[67] = "Câu 67: Trình bày kỹ  thuật trích lớp điều khiển? Số  lượng lớp điều khiển nhiều hay ít thì tốt?";
	ques[68] = "Câu 68: Ý nghĩa của sơ đồ trạng thái hữu hạn? Nó biểu diễn trạng thái của cả hệ thống, của lớp hay của phương thức?";
	ques[69] = "Câu 69: Ý nghĩa thẻ CRC, dùng thẻ CRC với lớp biên và lớp điều khiển được không? Có cần thiết không?";
	ques[70] = "Câu 70: Thiết kế kiến trúc cần các sơ đồ nào của UML?";
	
	ques[71] = "Câu 71: Thiết kế chi tiết cần các sơ đồ nào của UML?";
	ques[72] = "Câu 72: Làm thế nào để trích các lớp? Cần dùng các sơ đồ nào của UML? ";
	ques[73] = "Câu 73: Làm thế nào để trích các phương thức của lớp? Cần dùng các sơ đồ/công cụ nào của UML?";
	ques[74] = "Câu 74: Nếu cho các phương thức add/update/delete vào các đối tượng tương ứng thì có được không? Tại sao?";
	ques[75] = "Câu 75: Sơ đồ tuần tự và thẻ CRC có quan hệ gì với nhau?";
	ques[76] = "Câu 76: Sơ đồ lớp và sơ đồ cộng tác có gì khác nhau?";
	ques[77] = "Câu 77: Mỗi trạng thái của sơ đồ  trạng thái  ứng với một lớp hay một phương thức? Tại sao?";
	ques[78] = "Câu 78: Trình bày nguyên lý A của phần gán phương thức cho lớp, nguyên lý này thường dùng cho lớp loại nào?";
	ques[79] = "Câu 79: Trình bày nguyên lý B của phần gán phương thức cho lớp, nguyên lý này thường dùng cho lớp loại nào?";
	ques[80] = "Câu 80: Trình bày nguyên lý C của phần gán phương thức cho lớp, nguyên lý này thường dùng cho lớp loại nào?";

	ques[81] = "Câu 81: Thẩm định và xác minh là gì (V&V)? Tầm quan trọng của chúng?";
	ques[82] = "Câu 82: Có những loại V&V nào? Mô tả nội dung mỗi loại.";
	ques[83] = "Câu 83: inspection là gì? Khác gì với walkthrough?";
	ques[84] = "Câu 84: walkthrough là gì? Khác gì với inspection?";
	ques[85] = "Câu 85: Tại sao trong nhóm walkthrough và inspection, luôn phải có đại diện của workflow tiếp theo?";
	ques[86] = "Câu 86: Người ta nói « nhóm SQA tạo ra chất lượng cho phần mềm » đúng hay sai? Tại sao?";
	ques[87] = "Câu 87: Scenario và test case có liên quan gì đến nhau? ";
	ques[88] = "Câu 88: Nêu các phần chính phải có của một test case?";
	ques[89] = "Câu 89: Người ta có thể bắt đầu viết test case cho hệ thống bắt đầu từ bước nào?";
	ques[90] = "Câu 90: Phần mềm còn lỗi hay không khi thực hiện hết các ca kiểm thử được thiết kế? Khi nào dừng kiểm thử?";

	ques[91] = "Câu 91: Trình bày phương pháp kiểm thử hộp trắng: cơ sở phương pháp; các yêu cầu cần kiểm tra, các kỹ thuật được sử dụng";
	ques[92] = "Câu 92: Trình bày phương pháp kiểm thử hộp đen: cơ sở phương pháp; các yêu cầu cần kiểm tra, các kỹ thuật được sử dụng.";
	ques[93] = "Câu 93: Kiểm thử đơn vị đối tượng là gì? Ai thực hiện. Các phương pháp và kỹ thuật nào được sử dụng? Kiểm tra những loại lỗi nào?";
	ques[94] = "Câu 94: Các chiến lược nào sử dụng trong kiểm thử tích hợp? Ưu điểm và hạn chế mỗi loại? ";
	ques[95] = "Câu 95: Giải thích khái nhiệm stub và driver? Chúng được sử dụng ở đâu và vì sao? ";
	ques[96] = "Câu 96: Kiểm thử hệ thống nhằm kiểm tra cái gì? Ai thực hiện? Các phương pháp?";
	ques[97] = "Câu 97: Trình bày các kiểm thử được thực hiện trong kiểm thử hệ thống?";
	ques[98] = "Câu 98: Kiểm thử chấp nhận là gì? Trong đó có những kiểm thử nào được thực hiện? Phân biệt.";
	ques[99] = "Câu 99: Mô hình CMM là gì? Có những mức tăng trưởng nào trong mô hình CMM? Nội dung của mỗi mức? ";
	ques[100] = "Câu 100: Làm thế nào để một tổ chức đạt được các mức tăng trưởng trong CMM? Đâu là giải pháp và thước đo về các mức tăng trưởng?";													

	ques[101] = "Câu 101: Nêu các chuẩn quốc tế về phần mềm.Trình bày sự khác nhau giữa mô hình CMM và các chuẩn đó?";													
	ques[102] = "Câu 102: Nêu các chuẩn quốc tế về phần mềm.Trình bày sự khác nhau giữa mô hình CMM và các chuẩn đó?";													

// Random sounds
function getRandomSounds(modeNumber) {
		if(modeNumber == 0){
		    var randomNum = Math.floor(Math.random()*sounds.length);			
		}
		else if(modeNumber == 1){
		    var randomNum = Math.floor(Math.random()*21) + 0;
		}
		else if(modeNumber == 2){
		    var randomNum = Math.floor(Math.random()*21) + 20;
		}
		else if(modeNumber == 3){
		    var randomNum = Math.floor(Math.random()*21) + 40;

		}
		else if(modeNumber == 4){
		    var randomNum = Math.floor(Math.random()*21) + 60;

		}
		else if(modeNumber == 5){
		    var randomNum = Math.floor(Math.random()*22) + 80;

		}								
		return randomNum; 		
}	
//Initializer Function


function initAudio(element){

	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('artist');
	//Create Audio objects
	audio = new Audio('media/'+song);

	if(!audio.currentTime){
		$('#duration').html('0.00');
	}

	$('#audio-player .title').text(title);
	$('#audio-player .artist').text(artist);

	$('img.cover').attr('src','img/covers/'+cover);

	$('#playlist li').removeClass('active');

	element.addClass('active');	

}

//Play Button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	$('#duration').fadeIn(400);
	showDuration();
	stopCount = false;		
});

//Pause Button
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});

//Stop Button
$('#stop').click(function(){
	audio.pause();
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	$('#duration').fadeOut(400);
});

//Next Button
$('#next').click(function(){
	audio.pause();
	var next = $('#playlist li.active').next();
	if(next.length == 0){
		next = $('#playlist li:first-child');

	};
	initAudio(next);
	initQuestion(next);
	audio.play();
	showDuration();
	$('#play').hide();
	$('#pause').show();
	stopCount = false;		
});

//Prev Button
$('#prev').click(function(){
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length == 0){
		prev = $('#playlist li:last-child');

	};
	initAudio(prev);
	initQuestion(prev);
	audio.play();
	showDuration();
	$('#play').hide();
	$('#pause').show();
	stopCount = false;		
});


//Volume Control
$('#volume').change(function() {
	/* Act on the event */
	audio.volume = parseFloat(this.value / 10); 
});

$('#random').click(function(){
	audio.pause();
	var now = $('#playlist li.active');
	$('#playlist li').each(function() {

		var index = getRandomSounds(moderandom);

		var diachibaihat = "/mrHung/Voice";
		diachibaihat += index.toString();
		diachibaihat += ".m4a";
		$(this).attr("song", diachibaihat);
		this.innerHTML = diachibaihat.slice(8,diachibaihat.length);
	});
	initAudio(now);

	initQuestion(now);
	
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
	stopCount = false;
});

//Time Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get Hours & Minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt((audio.currentTime) / 60) % 60;

		// reset countDown clock
		document.getElementById("countdowntimer").textContent = 5;

		//Add 0 if less than 10
		if(s < 10){
			s = '0' + s;
		}
		$('#duration').html(m + '.' + s);
		var value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		if(audio.duration == audio.currentTime){
			countDown();
		}
		$('#progress').css('width', value+'%');
	});
}

//inIt question cho phần bên trái

function initQuestion(element){
	var song = element.attr('song');
	var thenum = song.replace( /^\D+/g, '');				 
	thenum = thenum.slice(0,-4);
	$('#question h4').text(ques[thenum]);
}

function countDown(){
	var timeleft = 5;
    var downloadTimer = setInterval(function(){
    	if(!stopCount){
    		timeleft--;		
    	}
    	else{
    		clearInterval(downloadTimer);
    	}

	    document.getElementById("countdowntimer").textContent = timeleft;
	    if(timeleft <= 0){
	        clearInterval(downloadTimer);
	    	$('img.cover').attr('src','img/khoamom.jpg');    
	    	failsound.play();   	
	    }
    },1000);	
}

// cac mode lua chon
$('#mode1').click(function(){
	moderandom = 1;
});
$('#mode2').click(function(){
	moderandom = 2;
});
$('#mode3').click(function(){
	moderandom = 3;
});
$('#mode4').click(function(){
	moderandom = 4;
});
$('#mode5').click(function(){
	moderandom = 5;
});
$('#modeAll').click(function(){
	moderandom = 0;
});
$('#Answer').click(function(){
	stopCount = true;
});
