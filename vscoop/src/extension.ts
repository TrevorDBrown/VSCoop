/*
*	VSCoop - a scriptable scratchpad for developers using VSCode.
*	(c)2021 Trevor D. Brown. All rights reserved.
*	Licensed under the MIT License.
*	Compatible with Boop ((c)2019 Ivan Mathy. All rights reserved.) and Woop (a port of Boop).
*
*	File: extension.ts
*	Description: The main TypeScript file for the VSCode Extension.
*/

import * as vscode from 'vscode'; // VS Code extensibility API

// Extension Functionality
// loadScripts - store the script content into a Script object.
function loadScripts(testString: string): void{
	vscode.window.showInformationMessage(testString);
}

// Extension Activation
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscoop" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('vscoop.testCommand', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		var strTest:string = "Hey there! This worked!";

		loadScripts(strTest);
	});

	context.subscriptions.push(disposable);
}

// Extension Deactivation
export function deactivate() {}
