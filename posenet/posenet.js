let video;
let poseNet;
let pose;
let skeleton;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}

function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0);
  if (pose) {
    /*let eyeR=pose.rightEye; let eyeL=pose.leftEye;
    let eyeD=dist(eyeR.x,eyeR.y,eyeL.x,eyeL.y)
    fill(255,0,0);
    ellipse(pose.nose.x, pose.nose.y, eyeD*0.65);
    fill(0,0,255);
    ellipse(pose.leftWrist.x, pose.leftWrist.y, 36)
    ellipse(pose.rightWrist.x, pose.leftWrist.y, 36)*/
    
    for (let i=0; i<pose.keypoints.length; i++) {
      if (pose.keypoints[i].score>0.4) {
        let x = pose.keypoints[i].position.x;
        let y = pose.keypoints[i].position.y;
        fill(0, 255, 0);
        ellipse(x, y, 16, 16);
      }
    }
    console.log(skeleton)
    for (let i=0; i<skeleton.length; i++) {
      let a=skeleton[i][0];
      let b = skeleton[i][1];
      strokeWeight(2);
      stroke(255);
      line(a.position.x, a.position.y, b.position.x, b.position.y);
    }
  }
}

