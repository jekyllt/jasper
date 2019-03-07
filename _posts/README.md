---
layout: post
cover: 'assets/images/cover3.jpg'
navigation: True
title: Mark Down 참고
date: 2019-02-26 12:18:00
<!-- tags: test content -->
<!-- subclass: 'post tag-test tag-content' -->
logo: 'assets/images/ghost.png'
author: roseline
---

이렇게 작성해요. <br><br>

**1. post 제목은 아래처럼 해주세요.** <br>

.md 는 마크다운 파일 포맷입니다. 
이걸 써주지 않으면 마크다운 언어가 인식되지 않습니다! <br>

<pre><code>
YYYY-MM-DD-대문자이니셜로-시작하는-영어-제목.md 
ex) 2019-02-24-How-to-write.md
</code></pre>

<br>

**2. 본문 첫 시작에 이걸 복붙해주세요.**

<pre><code>
---
layout: post
cover: 'assets/images/cover3.jpg'
navigation: True
title: Mark Down 참고
date: 2019-02-26 12:18:00
tags: test content
subclass: 'post tag-test tag-content'
logo: 'assets/images/ghost.png'
author: roseline
---
</code></pre>

수정하면 되는 건 3가지입니다. 

title, date, author 

- cover는 포스트의 상단 커버 이미지입니다. (선택)
- author는 자기 author 이름을 적으면 됩니다. 

author : kiwan, yosub, chayeon, dohyung, yoonji

<br>


**3. 마크다운으로 작성합니다.** <br><br>

마크다운 사용법은 아래 링크를 참고해주세요. <br>
  
[마크다운 사용법](https://gist.github.com/ihoneymon/652be052a0727ad59601) <br><br><br><br>


**4.수정 후 원본 저장소(djagnoHY/djangoHY.github.io)에 반영하기**

<br>

수정 전 꼭! **원본 저장소(djangoHY) 내용 반영하기** 

<code>git pull djangoHY master</code>


<br>
<br>



수정 후 pull request 방법 2가지 

4-1. github.com 사이트에서 수정
-  자신의 repository에서 수정한 뒤 사이트에서 new pull request 클릭
- <code>git pull origin master</code>명령어 입력(자신의 로컬 저장소에 반영해야 하므로)

<br>

4-2. 에디터에서 수정
- 에디터에서 수정 후 저장
- pycharm 에서 플러그인을 설치하면 아래처럼 preview를 볼 수 있다. : [마크다운 preview 플러그인 설치](https://wit.nts-corp.com/2014/08/13/1947)
- 저장 후 터미널 열고 아래 명령어들 입력
- github.com - 본인 repository에서 new pull request

<pre><code>
git add .
git commit -m "how to write post"
git push origin master
</code></pre>

<br>

![preview](/assets/images/preview.PNG "preview")



