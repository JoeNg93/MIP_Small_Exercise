/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

function elID(id) {
  return document.getElementById(id);
}

function setImgSrc(imgId, imgPath) {
  elID(imgId).src = imgPath;
}

var app = {
  // Application Constructor
  initialize: function() {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    );
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function() {
    elID('get-photo-btn').addEventListener('click', () => {
      navigator.camera.getPicture(this.onGetPhotoSuccess, this.onGetPhotoFail, {
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY
      });
    });

    elID('take-photo-btn').addEventListener('click', () => {
      navigator.camera.getPicture(
        this.onTakePhotoSuccess,
        this.onTakePhotoFail,
        {
          sourceType: Camera.PictureSourceType.CAMERA
        }
      );
    });
  },

  onTakePhotoSuccess: function(imgPath) {
    setImgSrc('my-img', imgPath);
  },
  onTakePhotoFail: function(err) {
    alert(err);
  },

  onGetPhotoSuccess: function(imgPath) {
    setImgSrc('my-img', imgPath);
  },
  onGetPhotoFail: function(err) {
    alert(err);
  }
};

app.initialize();
