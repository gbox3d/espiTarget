## espiTarget


### rc.local 파일 설정

pi 에서 자동시작을 위해서 rc.local 파일을 다음과 같은 내용을 추가 한다.  
압축해제된 번들 디랙토리가 /home/pi/work/bundle 이라고 가정 하면 다음과 같다.

```shell

(cd /home/pi/work/bundle; ./run_deploy.sh)

```

### LX 데스크톱 자동시작 등록

autostart 파일을 연다.  
```
sudo nano /home/pi/.config/lxsession/LXDE-pi/autostart
```

다음 내용 추가 한다.

```
@electron --disable-gpu 파일경로
```


