# Guidelines
NodeJs Guidelines Fresher/Intermediate

# Development Guidelines:

* Need to log technical changes over confluence and need to notify team (Frontend team only accept change only if it is mentioned in confluence)
* There must 4 branches during development 
  > * Dev : For internal development
  > * Qa: For QA testing 
  > * Staging: To be sent to client
  > * Master: production 

* We would have 4 separate deployments,one for each branch.
* There is at least one code reviewer for any merge over dev branch
* QA and Staging branch will only be merged by tech lead(Either internal or Client side)
* A linter passing code will only be eligible for pull request (Reviewer will responsible for that)
  > Use the below libraries to get around dependencies for your Code editer
    > * "eslint": "^6.8.0"
    > * "eslint-config-airbnb": "^18.0.1"
    > * "eslint-config-airbnb-base": "^14.0.0"
    > * "eslint-config-prettier": "^6.10.0"
    > * "eslint-plugin-import": "^2.20.1"
    > * "@typescript-eslint/parser"
    > * @typescript-eslint/eslint-plugin"

# Basic Guidelines for new joiners

# Documenting better
* Try to document every module with relevant information about the module like what it does and who wrote it
* Try to document all functions with their input and output parameters
* Try including a header to give out important information about the file/module as to what goes in there.

# Indentation and Naming standards
* There must be a space after giving a comma between two function arguments.
* Each nested block should be properly indented and spaced.
* Proper Indentation should be there at the beginning and at the end of each block in the program.
* All braces should start from a new line and the code following the end of braces also start from a new line.
* Meaningful and understandable variables name helps anyone to understand the reason of using it.
* Local variables should be named using camel case lettering starting with small letter (e.g. localData)
* Global variables names should start with a capital letter (e.g. GlobalData).
* Constant names should be formed using capital letters only (e.g. CONSDATA).
* It is better to avoid the use of digits in variable names.
* The names of the function should be written in camel case starting with small letters.
* The name of the function must describe the reason of using the function clearly and briefly.

# Controllers and Services
* Controllers should only contain direct request interfaces and should not have any business logic.
* Further processing may be done by calling one or more functions from respective service files.
* Functions inside of services may not be very long and if required, broken into other smaller reusable functions for enhanced modularity.

# Exceptions handling
* Exceptions thrown must be caught and formatted before ending the response to maintain uniformity.

# Writing Test cases
* One should write test cases along with code and make it a practice as it greatly improves ones efficiency at quality of code being written.
* A test framework can be used to go about the whole process of developing a test oriented programming.
