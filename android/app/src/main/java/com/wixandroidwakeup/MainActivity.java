package com.wixandroidwakeup;

import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // fix app reloads every time when launch from app store after first download
    if (!isTaskRoot()
      && getIntent().hasCategory(Intent.CATEGORY_LAUNCHER)
      && getIntent().getAction() != null
      && getIntent().getFlags() != 0
      && getIntent().getFlags() != Intent.FLAG_ACTIVITY_NEW_TASK
      && getIntent().getPackage() == null
      && getIntent().getAction().equals(Intent.ACTION_MAIN)) {
      finish();
      return;
    }
  }
}
