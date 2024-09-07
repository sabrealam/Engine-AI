# Engine Command Line Interface

![Start_Up_Image](https://i.imgur.com/GX211Jo_d.webp?maxwidth=1520&fidelity=grand)

## 🚀Quickstart ![Quick Start](https://img.shields.io/badge/Quick%20Start-%F0%9F%9A%80-blue "Quick Start")
 

Do Your Work Smoothly With CLI

**1. Install**

```shell
npm install engine-ai
```

**OR  Install Globally**

```shell
npm install -g engine-ai
```

**2. Initilize Engine CLI**

```javascript
Run :- eng start
You Will See // ⇨ 'Welcome To Engine CLI'
```

For Any Kind Of Help Run `engine start -h  `utility name and -h Or --help ...

<!-- ------------------------------------------------- -->

## ⚙️ Setup Execution Policy (Windows Users Only) Optional

If you are a Windows user and encounter an error related to the execution policy (e.g., `set-executionpolicy`), follow these steps to allow your CLI tool to run scripts:

### 📝 Steps:

1. **Open PowerShell**:
   - Right-click on the Start menu and select **Windows PowerShell (Admin)**.

2. **Check Current Execution Policy**:
   - Before changing the policy, you can check the current setting by running:
   
     ```powershell
     Get-ExecutionPolicy
     ```

3. **Set Execution Policy**:
   - Run the following command to set the execution policy to `RemoteSigned`:
   
     ```powershell
     Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
     ```

4. **Confirm the Change**:
   - When prompted, type `Y` and press **Enter**.

5. **Verify the Policy**:
   - To verify the change, you can run:
   
     ```powershell
     Get-ExecutionPolicy -Scope CurrentUser
     ```

   It should now display `RemoteSigned`.

6. **Close PowerShell**:
   - After making the change, close the PowerShell window.

7. **Run Your CLI**:
   - Now, you should be able to run the CLI command without any issues.

### ❓ Why is this Required?

Windows has a built-in security feature that prevents running scripts from untrusted sources. By changing the execution policy to `RemoteSigned`, you are allowing scripts that are downloaded from the internet to run, provided they are signed by a trusted publisher. This ensures a balance between security and usability.

---

With these steps completed, you can continue using the CLI tool on Windows without any execution policy errors!





<!-- ------------------------------------------------- -->




## 📅 API Summary

|  |  |  |
| --- | --- | --- |
| [`eng start`](#eng_start)                          | To Initilize the CLI                            | New in `eng@2.1`                      |
| [`eng start tp`](#eng_start_tp)                         | To Create A Template                            | New in `eng@2.0`                      |
| [`eng start ai`](#eng_start_ai)                    | Start Generative AI For Help                    | New in `eng@2.3`                      |
|                                          
## ⚡ API Details

### eng_start

This Will Start CLI Engine.

Example:

```javascript
Run :- eng start
You Will See // ✔ ⇨ 'Welcome To Engine CLI'
```

### eng_start_tp

This Will Propmt For The Choosing The Kinds Of Templates ...

Example:

 ```
Run :- eng start tp
```
Please select a template:
- ⚛️ React
- 🖥️ Express
- 🌐 HTML


### eng_start_ai

This Will Propmt For The Choosing The Kinds Of AI Help ...

Example:

```javascript
Run :- eng start ai
```
You Will Be Prompted For
- 📚 General: Get help with general queries or prompts.
- 🛠️ Modifying a File Based on the Prompt: Update a specific file according to the prompt.



## 📄 Genral
>   Choose Genral Help if you want to solve your doubt or any specific purpose for example :- give the propmt and see your answer as usual on Chat GPT. Right from you terminal  

## 🛠️ Modifying A FIle Based On The Prompt
>   Choose this option if you want the help for a specefic file and based on the prompt you want to update your file.  

## ✨ Examples
        * Suppose you are in root directory of your vite project
<span style="color:green">**Command**</span> **:** eng start ai ./src/App.jsx

<span style="color:green">**Prompt**</span> **:** Change this component to the counter component

<span style="color:green">**Response**</span> **:**
- Your Counter Component has been genrated 
- see in the terminal
- if you satisfy from this output
- And it will peompt for the overwrite the content which is inside the App.jsx 
- If choose Yes 
- it insert the newly genrated code To the App.jsx


 
## ✨ Features

- Create Template
- Remove Unnecessary code from the Template
- AI Integrated
- Modify File with response genrated by AI

![Features](https://img.shields.io/badge/Features-%E2%9C%A8-brightgreen "Features")



### 🔑 Key Highlights:
1. **🚀 and 📦 Icons** to give a visual appeal to different sections.
2. A clear instruction for Windows users to set the execution policy manually.
3. The usage of command blocks to make instructions clear and readable.

This should help users understand how to fix the execution policy error and run your CLI tool successfully.
 

## 📬 Contact

For any questions or support, please reach out to us at [support@engine-ai.com](mailto:asabre5073@gmail.com).

 
[![Contact](https://img.shields.io/badge/Contact-%F0%9F%93%AC-blue "Contact")](mailto:asabre5073@gmail.com)

 