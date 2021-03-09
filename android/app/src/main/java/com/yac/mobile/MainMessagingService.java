package com.yac.mobile;

 import io.intercom.android.sdk.push.IntercomPushClient;
 import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingService;

 import com.google.firebase.messaging.RemoteMessage;
 import android.util.Log;
 import java.util.Map;
 
 public class MainMessagingService extends ReactNativeFirebaseMessagingService {
     private static final String TAG = "MainMessagingService";
     private final IntercomPushClient intercomPushClient = new IntercomPushClient();
 
     @Override
     public void onMessageReceived(RemoteMessage remoteMessage) {
         Log.d(TAG, "Intercom message received " + remoteMessage.toString());
         Map message = remoteMessage.getData();
 
         if (intercomPushClient.isIntercomPush(message)) {
             Log.d(TAG, "Intercom message received");
             intercomPushClient.handlePush(getApplication(), message);
         } else {
             super.onMessageReceived(remoteMessage);
         }
     }
 }