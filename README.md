# Engine Command Line Interface
![Start_Up_Image](./src/assets/welcome.png)

## Quickstart

Do Your Work Smoothly With CLI

**1. Install**

```shell
npm install engine-ai
```

**1. Install Globally**

```shell
npm install -g engine-ai
```

**2. Initilize Engine CLI**

```javascript
Run :- eng start
You Will See // ⇨ 'Welcome To Engine CLI'
```

For Any Kind Of Help Run `engine start -h  `utility name and -h Or --help ...

## API Summary

|                                                    |                                                 |                                       |
| -------------------------------------------------- | ----------------------------------------------- | ------------------------------------- | ----------------- |
| [`eng start`](#eng_start)                          | To Initilize the CLI                            | New in `eng@2.1`                      |
| [`eng start tp`](#uuidmax)                         | To Create A Template                            | New in `eng@2.0`                      |
| [`eng start ai`](#uuidparsestr)                    | Start Generative AI For Help                    | New in `eng@2.3`                      |
| <!--                                               | [`uuid.stringify()`](#uuidstringifyarr-offset)  | Convert array of bytes to UUID string | New in `uuid@8.3` |
| [`uuid.v1()`](#uuidv1options-buffer-offset)        | Create a version 1 (timestamp) UUID             |                                       |
| [`uuid.v1ToV6()`](#uuidv1tov6uuid)                 | Create a version 6 UUID from a version 1 UUID   | New in `uuid@10`                      |
| [`uuid.v3()`](#uuidv3name-namespace-buffer-offset) | Create a version 3 (namespace w/ MD5) UUID      |                                       |
| [`uuid.v4()`](#uuidv4options-buffer-offset)        | Create a version 4 (random) UUID                |                                       |
| [`uuid.v5()`](#uuidv5name-namespace-buffer-offset) | Create a version 5 (namespace w/ SHA-1) UUID    |                                       |
| [`uuid.v6()`](#uuidv6options-buffer-offset)        | Create a version 6 (timestamp, reordered) UUID  | New in `uuid@10`                      |
| [`uuid.v6ToV1()`](#uuidv6tov1uuid)                 | Create a version 1 UUID from a version 6 UUID   | New in `uuid@10`                      |
| [`uuid.v7()`](#uuidv7options-buffer-offset)        | Create a version 7 (Unix Epoch time-based) UUID | New in `uuid@10`                      |
| ~~[`uuid.v8()`](#uuidv8)~~                         | "Intentionally left blank"                      |                                       |
| [`uuid.validate()`](#uuidvalidatestr)              | Test a string to see if it is a valid UUID      | New in `uuid@8.3`                     |
| [`uuid.version()`](#uuidversionstr)                | Detect RFC version of a UUID                    | New in `uuid@8.3`                     | -->               |

## API Details

### eng_start

This Will Start CLI Engine.

Example:

```javascript
Run :- engstart
You Will See // ✔ ⇨ 'Welcome To Engine CLI'
```

### eng_start_tp

This Will Propmt For The Choosing The Kinds Of Templates ...

Example:

```javascript
Run :- eng start tp

You Will Be Prompted For
                        - React
                        - Express
                        - HTML
```

### eng_start_ai

This Will Propmt For The Choosing The Kinds Of AI Help ...

Example:

```javascript
Run :- eng start tp

You Will Be Prompted For
                        - Genral
                        - Modifying A FIle Based On The Prompt
```
