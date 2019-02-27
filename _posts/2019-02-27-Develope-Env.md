---
layout: post
cover: 'assets/images/meditation.jpg'
navigation: True
title: 실습 환경 준비하기 (a.k.a 인내심 테스트)
tags: django study 
subclass: 'post tag-test tag-content'
date: 2019-02-27 8:56:00
author: roseline
categories: roseline
---
<br>

※참고 : [가상환경 및 장고 설치하기](https://tutorial.djangogirls.org/ko/django_installation/)

<br>

**1. 프로젝트 폴더 만들기**

- 원하는 경로에 프로젝트 폴더 생성
- 터미널에서 mkdir 명령어를 쓰거나, 탐색기 들어가서 수동으로 설치해도 좋아요.

<br>
<br>
<br>


**2. 가상환경**
<br>
- 터미널에서 해당 폴더 경로로 이동
- 터미널에서 아래 명령 실행 

<br>
※주의 : '>'는 치지 마세요 :)  <br>
※참고 : 가상환경 실행을 중단하려면 'deactivate'를 치시면 됩니다.

<br>
<pre> <code> 
> python -m venv 가상환경이름 
> 가상환경이름\Scripts\activate
</code> </pre>

<br>

성공 시, 이렇게 나와야 합니다.
<br>

<pre><code> 
(가상환경이름)프로젝트폴더경로 > 

</code></pre>

<br>
<br>
<br>


**3. Django 설치**

- **가상환경 실행 상태**에서 아래 명령어들 실행
- 참고로 django 1.1 이후 버전은 python 2.7 을 지원하지 않습니다.
- 파이썬 버전을 모르겠다!하시면 다른 터미널을 열고 'python -v' 또는 'python --version' 쳐보세요.
- MAC OS에서 오류가 뜨는 경우, 앞에 'sudo' 명령어를 써보세요.

<br>
※참고 : [django 공식 문서 : 어떤 버전을 사용할까요?](https://docs.djangoproject.com/ko/2.1/faq/install/)
<br><br>

<pre> <code> 
> python -m pip install --upgrade pip
> pip install django~=2.1.7
</code> </pre>

<br>
<br>
<br>



**4. Django 프로젝트 시작하기!**

- **가상환경 실행 상태**여야 합니다.
- 해당 [djangogirls 튜토리얼](https://tutorial.djangogirls.org/ko/django_start_project/)을 그대로 따라하시면 됩니다.
- Q. settings.py 는 어떻게 수정하나요? 
- A. 코드 에디터를 사용하거나, 터미널에서 vi나 vim을 사용해 수정하셔도 좋습니다. 

<br>
<br>
<br>



**5. Django 어플리케이션 시작하기!**

- **가상환경 실행 상태**여야 합니다.
- 터미널에서 아래 명령어 실행

<pre><code> 
python manage.py startapp 앱 이름

</code></pre>

<br>
<br>


- django에게 우리가 만든 앱 이름을 알려줘야합니다.
- 코드 에디터로 가서, 프로젝트이름/settings.py 파일을 엽니다. (4번 그대로 따라하셨다면 mysite/settings.py일 거에요)
- 아래처럼 INSTALLED_APPS 리스트에 우리가 만든 앱 이름을 써주세요. 

<br>

<pre><code> 
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    '앱 이름',
]
</code></pre>

<br>
<br>
<br>



**6. 증말 마지막. git 연결하기**

<br>

![whatthe](/assets/images/shit.jpg "whatthe")  

<br>

이거 언제 끝나.. 마지막입니다. <br>
우리 처음 모인 날 git을 잠깐 해봤으니까 더 빠르고 쉽게 끝날 거에요. ^0^

<br>
※참고 : [git 저장소 연결하기](https://tutorial.djangogirls.org/ko/deploy/)

<br>


- 본인이 처음 만든 폴더(1번에서 만든 폴더)로 이동하세요. 
- 가상환경 실행 중이라면 '**deactivate**'라고 치고 비활성화 하세요.
- 아래 명령어들 실행합니다. 

<br>

<pre><code> 
> git init
> git config --global user.name "Your Name"
> git config --global user.email you@example.com
</code></pre>

<br>

- 에디터를 열어서 '.gitignore'라는 이름의 파일을 만들어요.
- 아래 내용을 넣어주고, 저장은 1번에서 만든 폴더에 합니다. (탐색기로 해당 폴더를 보면 .git 폴더가 있을 거에요.) 
- 가상환경이름이 myvenv라면 myvenv라고만 쓰시면 됩니다. 

<pre><code> 
*.pyc
*~
__pycache__
가상환경이름
db.sqlite3
/static
.DS_Store
</code></pre>


- 여기까지 완전 잘하셨어요. 짝짝짝!
- 어제처럼 [깃허브 사이트](github.com)에 들어가서 repository(저장소) 하나를 생성합니다.
- 이름만 설정하고 나머지 체크박스는 건들지 않고 바로 생성하면 됩니다. 

<br>

![repository](/assets/images/git1.PNG "git-repository")  

<br>


- 저장소를 생성하면 이런 화면이 뜨는데요. 우리는 파란색으로 밑줄 친 주소만 복사하면 돼요. 

<br>


![address](/assets/images/git2.PNG "remote-rep-address")  

<br>


- 이제 다 끝났습니다.
- 터미널에 아래 명령어들을 입력하고, 첫번째 커밋을 해봐요!
- add --all . 할 때 한 칸  점(.) 찍는 거 잊지 마세요. '현재 폴더'라는 의미입니다.

<br>

<pre><code> 
> git status
> git add --all . 
> git commit -m "아무 메시지 입력 :)"
> git remote add origin 아까 복사한 주소 붙여넣기(마우스 우클릭하면 복붙됩니다)
> git push -u origin master
</code></pre>

<br>

- git push -u origin master 한 다음에 계정, 패스워드 입력하라고 하면 github 계정, 패스워드 입력하면 됩니다. 







