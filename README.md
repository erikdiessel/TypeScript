# Unobtrusive Typescript

This is a fork of the TypeScript-compiiler which is fully compliant(passes
*all* original tests) but also works with .js files which include
*unobtrusive TypeScript*.
Unobtrusive TypeScript is Javascript with embedded TypeScript type annotations
in the comments. This allows you to use the typechecker and other features
of the TypeScript-compiler but without introducing a new data format.
All utilities for javascript can still be used (like jslint, or grunt or ...).

Source code in unobtrusive TypeScript:

    function square(x/*::number*/)/*::number*/ { return x*x; }

Equivalent TypeScript code:

    function square(x: number): number { return x*x; }
    
To compile/type-check a .js file named 'test.js':
    
    $ tsc test.js
    
If you don't specify an output file or an output directory, there will
be no files generated, but your code is type-checked.

    
All code included in 
    
    /*:
    
and 
    */
    
tags is interpreted as TypeScript code. The so generated TypeScript code
is then typechecked etc. You can also compile all the code in one file,
as if you were programming in normal TypeScript.

# Original documentation

[TypeScript](http://www.typescriptlang.org/) is a language for application-scale JavaScript. TypeScript adds optional types, classes, and modules to JavaScript. TypeScript supports tools for large-scale JavaScript applications for any browser, for any host, on any OS. TypeScript compiles to readable, standards-based JavaScript. Try it out at the [playground](http://www.typescriptlang.org/Playground), and stay up to date via [our blog](http://blogs.msdn.com/typescript) and [twitter account](https://twitter.com/typescriptlang).


## Contribute

There are many ways to [contribute](https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md) to TypeScript.
* [Submit bugs](https://github.com/Microsoft/TypeScript/issues) and help us verify fixes as they are checked in.
* Review the [source code changes](https://github.com/Microsoft/TypeScript/pulls).
* Engage with other TypeScript users and developers on [StackOverflow](http://stackoverflow.com/questions/tagged/typescript). 
* Join the [#typescript](http://twitter.com/#!/search/realtime/%23typescript) discussion on Twitter.
* [Contribute bug fixes](https://github.com/Microsoft/TypeScript/blob/master/CONTRIBUTING.md).
* Read the language specification ([docx](http://go.microsoft.com/fwlink/?LinkId=267121), [pdf](http://go.microsoft.com/fwlink/?LinkId=267238)).


## Documentation

*  [Quick tutorial](http://www.typescriptlang.org/Tutorial)
*  [Programming handbook](http://www.typescriptlang.org/Handbook)
*  [Language specification](http://go.microsoft.com/fwlink/?LinkId=267238)
*  [Homepage](http://www.typescriptlang.org/)

## Building

In order to build the TypeScript compiler, ensure that you have [Git](http://git-scm.com/downloads) and [Node.js](http://nodejs.org/) installed.

Clone a copy of the repo:

```
git clone https://github.com/Microsoft/TypeScript.git
```

Change to the TypeScript directory:

```
cd TypeScript
```

Install Jake tools and dev dependencies:

```
npm install -g jake
npm install
```

Use one of the following to build and test:

```
jake local           # Build the compiler into built/local 
jake clean           # Delete the built compiler 
jake LKG             # Replace the last known good with the built one.
                     # Bootstrapping step to be executed when the built compiler reaches a stable state.
jake tests           # Build the test infrastructure using the built compiler. 
jake runtests        # Run tests using the built compiler and test infrastructure. 
                     # You can override the host or specify a test for this command. 
                     # Use host=<hostName> or tests=<testPath>. 
jake baseline-accept # This replaces the baseline test results with the results obtained from jake runtests. 
jake -T              # List the above commands. 
```


## Usage

```shell
node built/local/tc.js hello.ts
```


## Roadmap

For details on our planned features and future direction please refer to our [roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap).