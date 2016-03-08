# mvn-whiten

> download maven jars to your internal artifactory server

Creates a `tar` archive for maven dependencies. yay.

## Installation
First make sure you have java installed or the program won't work.
Install `mvn-whiten` with the command:

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

**If an exception is thrown complaining about missing dependencies, you might need to add extra repositores to your directory, see `extra-repos.json` for example.**

*Tip: Copy the gradle profile from http://mvnrepository.com/ artifact as the parameter.*
