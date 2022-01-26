# Getting Started with the iTwin Viewer Create React App Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment Variables

Prior to running the app, you will need to add OIDC client configuration to the variables in the .env file:

```
# ---- Authorization Client Settings ----
IMJS_AUTH_CLIENT_CLIENT_ID=""
IMJS_AUTH_CLIENT_REDIRECT_URI=""
IMJS_AUTH_CLIENT_LOGOUT_URI=""
IMJS_AUTH_CLIENT_SCOPES =""
```

```
# ---- Test ids ----
IMJS_ITWIN_ID = ""
IMJS_IMODEL_ID = ""
```

Greetings.

I am having problems in dealing with the UI of select following the 3.0 update. 

I am using select from itwinui-react, without any styling (MenuStyle, menuItemStyle). The behavior I am expecting here, is that select dropdowns a menu precisely underneath it, (or above it in case that select is positioned at the bottom of the screen).
But i am experiencing rather interesting bugs when I am making a <select> inside a dialog box. let me explain it with screenshots,

![image](https://user-images.githubusercontent.com/89520756/151133650-3026de80-165a-4331-84bf-a7c5b9ec8ebf.png)


