---
layout: post
cover: 'assets/images/cover3.jpg'
navigation: True
title: 실습 환경 준비하기
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

**2. 가상환경**
<br>
- 터미널에서 해당 폴더 경로로 이동
- 터미널에서 아래 명령 실행 

<br>
※주의 : '>'는 치지 마세요 :) (OS에 따라서 '>'가 아니라 '$'일수도 있어요)
※참고 : 가상환경 실행을 중단하려면 'deactivate'를 치시면 됩니다.

<br><br>

<pre> <code> 
> python -m venv 가상환경이름 # 가상환경 만들기
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


**4. Django 프로젝트 시작하기!**

- **가상환경 실행 상태**여야 합니다.
- 해당 djangogirls 튜토리얼을 그대로 따라하시면 됩니다.
- [나의 첫 번째 django 프로젝트!](https://tutorial.djangogirls.org/ko/django_start_project/)
- Q. settings.py 는 어떻게 수정하나요? 
- A. 코드 에디터를 사용하거나, 터미널에서 vi나 vim을 사용해 수정하셔도 좋습니다. 


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



