---

layout: post cover: 'assets/images/cover3.jpg' 
navigation: True 
title: Django Form 
tags: django study 
subclass: 'post tag-test tag-content' 
date: 2019-05-01 12:46:00 
author: rldhkstopic
categories: rldhkstopic
-----------------------

<h3>Django Form</h3>
HTML에서 Form은 웹 페이지상에서 한개 이상의 필드나 위젯들의 묶음을 말하며 주로 홈페이지를 사용하는 User로부터 Data를 얻어 Server에 저장하는데 사용됩니다. 텍스트 박스와 같이 데이터를 입력받는 위젯들이 많기 때문에 Form은 정보수집에 특화된 장치로서 Django에서 Model보다 강력한 역할을 합니다.<br><br>

<h3>Form Processing Process in Django tree</h3>
<img src="assets/images/01.png" width="70%"><br>
<h5> Django에서 Form은 다음 처리과정을 거칩니다.</h5>
<li> 사용자로부터 처음 Form Request를 받을 때 Initial Form을 보여줍니다.
<li> 데이터가 입력된 Form의 Submit Request를 받습니다.
<li> 해당 Request로부터 데이터를 수집하고 이를 기존의 Form Data와 결합합니다.
<li> 해당 필드에 적절한 값인지를 판단해 데이터를 다듬어서 유효성을 검증합니다.
<li> 입력된 데이터가 유효하지 않으면 에러 메세지를 표시합니다.
<li> 입력된 모든 데이터가 유효하다면 요청된 동작을 수행하여 데이터를 저장합니다.
<li> 모든 작업이 완료되었다면 사용자를 새로운 페이지로 보냅니다.<br><br>

<h3>Let's Practice</h3> 
바로 실습을 진행해봅시다.<br> 
우선 reviewBoar 폴더로 이동해서 forms.py 파일을 새로 만들어주세요.<br>
<img src="assets/images/02.png" width="70%"><br><br>

그리고 reviewBoard/templates/reviewBoard 폴더안에 form.html이라는 파일을 하나 만들어주세요.<br>
<img src="assets/images/03.png" width="70%"><br><br>

forms.py 파일안에 아래와 같이 코드를 입력해주세요.<br> 
저는 각각 가게 이름, 위치, 추천 음식을 넣어 추천 가게 폼을 만들었습니다.<br>
<img src="assets/images/04.png" width="70%"><br><br>

되셨으면 views.py 파일로 이동해서 forms 파일에서 저희가 만들어준 폼을 임포트해주세요.<br>
<img src="assets/images/05.png" width="70%"><br><br>

그리고 views.py 파일에 아래 코드를 입력해주세요.<br>
<img src="assets/images/06.png" width="70%"><br>
여기서 경우에 따라 다르겠지만 우선 POST와 GET 기능만 넣어주었습니다.<br> 
django에서 대부분의 경우 이렇게 POST와 GET으로 나눠서 역할 부여합니다.<br> 
그래서 POST를 누르면 작성한 form을 게시하고 GET을 누르면 현재 form을 화면에 보여줍니다.<br><br><br>

저장하고 이번에는 urls.py로 이동해서 path를 추가해줍시다.<br> 
views의 form 함수를 불러오는 것이니 views.form이라고 오타없이 입력해주세요.<br>
<img src="assets/images/07.png" width="70%"><br><br>

이렇게 하면 아주 간단하게 form 형식을 선언해준 것이 됩니다.<br> 
이제는 form.html로 이동해서 css와 함께 구조와 디자인을 만들어봅시다.<br> 
간단히 form만 만들고자 하신다면 아래 코드만 작성해주시면 됩니다.<br>
<img src="assets/images/08.png" width="70%"><br><br>

저는 테마를 만들어서 css와 html 코드가 추가로 존재합니다.<br>
<img src="assets/images/09.png" width="70%"><br>(# form.html)<br><br>
<img src="assets/images/10.png" width="70%">
<img src="assets/images/11.png" width="70%"><br>(# blog.css)<br><br>
<img src="assets/images/12.png" width="70%"><br>(# form.css)<br><br><br>

css와 html까지 적용하고 http://127.0.0.1:8000/form/ 으로 이동하시면 아래와 같은 화면이 뜹니다.<br>
<img src="assets/images/13.png" width="70%"><br><br><br>

다음은 form과 model을 연결시켜주는 과정에 대해서 알아봅시다.<br> form을 통해 데이터를 제출했으면 이를 저장할 데이터 저장소가 필요합니다.<br><br> 다시 views.py로 이동해서 코드를 살짝 수정해줍시다.<br>
<img src="assets/images/14.png" width="70%"><br><br>

제출하기를 누르면 if request.method == 'POST' 아래 구문들이 동작하게됩니다.<br>
먼저 form을 ReviewForm(request.POST)로 선언해 form으로 넘겨받은 데이터를 html 코드 상태로 받습니다.<br><br> 
그 다음 1차적으로 if문을 통해 해당 폼의 데이터가 올바른 지 확인을 해줍니다.<br> 
예를 들어 만약 시간을 입력해야하는 곳에 문자열이 존재하면 에러가 뜨게될 것입니다.<br><br>
obj라는 변수에다 우리가 입력한 Restaurant 정보 (이름, 위치, 유형)을 담고 obj.save로 저장해줍니다.<br>
이렇게 form의 각각 파라미터를 data로 접근해서 form 정보를 저장할 수 있습니다.<br><br> 
다시 http://127.0.0.1:8000/form/으로 이동하고 form을 작성한 후 제출해봅시다.<br>
<img src="assets/images/16.png" width="70%"><br><br>

제출이 완료되었다고 뜨시면 성공입니다!<br> 그럼 정말로 저희가 제출한 데이터가 저장되었는지 확인해봅시다.<br>
http://127.0.0.1:8000/admin/으로 들어가 Restaurant 항목을 클릭해보면 정말 아래와 같이 입력되었습니다.<br>
<img src="assets/images/17.png" width="70%"><br><br>

홈페이지 메인 화면에도 새로운 메뉴가 추가된 모습을 확인할 수 있습니다.<br>
<img src="assets/images/18.png" width="70%"><br><br>
