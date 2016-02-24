# mvn-whiten

> download maven jars to your internal artifactory server
> using a precompiled [mvn-dd](https://github.com/Gemba/mvn-dd)

Creates a `tar` archive for maven dependencies. yay.

## Installation
First make sure you have java installed or the program won't work.
Install `mvn-whiten` with the command:

*You must have java installed*

```bash
npm install -g mvn-whiten
```
Might need sudo permissions on linux.

## Usage

```bash
mvn-whiten <groupId>:<artifactId>:<version>
```

and there will be a new `tar` file.

that's it.

*Tip: Copy the gradle profile from http://mvnrepository.com/ artifact as the parameter.*
