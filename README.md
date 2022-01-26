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

![image](https://user-images.githubusercontent.com/89520756/151129276-d02ede31-a5dc-4e08-b4ec-f48249cf2f3f.png)

Here i have clicked on the "Comment" select box, but the dropdown menu hasnt dropped, (I believe that the menu is placed outside the screen). But if I move the dialog box and then I press the select menu, the dropdown appears at the correct location. As you will see in the screenshot below.
![image](https://user-images.githubusercontent.com/89520756/151129680-d096d410-658d-4986-b7ce-422559d0c049.png)

I also noticed that this behavior does not occur if the select is in the side menu inside a widget. As you can see in the screenshot below.

![Screenshot 2022-01-26 134642](https://user-images.githubusercontent.com/89520756/151131344-3ea4bce9-812c-4ed1-bd79-de3d169979a8.png)


I am uploading the sample project featuring these issues.

Please install the project, fill the env file with your variables, and then run it. You will see Dropdown and DropDownBtn widgets in the side menu, please refer to them as the example of the problem.

The file you need to refer to will be uiProvider.tsx 

Here are the lines for select, 
For the select option in dialog box:
https://github.com/hanan-commits-work/itwins3.0-guidance/blob/214fd5d738dcf59eb3aa5784984d06a3d203fc81/src/uiProvider.tsx#L36


For the select option in the widget:
https://github.com/hanan-commits-work/itwins3.0-guidance/blob/214fd5d738dcf59eb3aa5784984d06a3d203fc81/src/uiProvider.tsx#L90

