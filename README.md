# ctd-fe3-final

Frontend III Final Exam.

## Indice

- [Requirements](#Requirements)
  - [Minimum passing conditions](#condiciones-mínimas-de-aprobación)
  - [Aspects that modify the final evaluation of the grade](#Aspects-that-modify-the-final-evaluation-of-the-score)
- [Functionalities](#Functionalities)
- [Development](#Development)
- [API](#api)
- [Delivery](#entrega)
  - [Delivery Date](#fecha-de-entrega)
  - [Delivery Forma](#Delivery-Format)

## Requirements

It is essential to clone this project in a private repository, in order to be able to work _individually_ or in _in pairs_. Projects that have been created without this template will not be accepted. For that you will have to create a repository with the name "ctd-esp-fe3-final" in your Github account and then follow these steps in your terminal

```
# clone the final repository to your computer
git clone https://github.com/Frontend-III/fe3-final

# enter the final's directory
cd fe3-final

# emove the links to the DH repository
git remove remote origin

# add the link to the repository from your github account, replace <youruser> with your account
git remote add origin https://github.com/<tuusuario>/fe3-final

# Upload the initial template to your github repository
git push -u origin main
```

### Approval conditions

The following conditions are minimum requirements necessary for approval of the final:

- **Comply with all mandatory functionality**.
- Only the libraries detailed in this README may be used. See [Dependencies](docs/development.md#dependencies).
- Any functionality that is implemented using a library other than the allowed ones will not be considered done.
- It must be developed using Javascript with React.js as the library.
- The Contact page is expected to contain the necessary validation flows (minimum 2 validations) for a correct form submission.
- In the cases in which it is required to give styles to components, it must be done taking into account the theme of the global context.

### Aspects that modify the final evaluation of the score

The following aspects are extras to the minimum passing requirement that will be taken into account to increase the final grade, as long as their implementation is correct

**Validations**.

- One validation for each campor is enough, they can be "manual" or with regular expressions. The important thing is the correct handling of errors and submits.

**Featured functionality**

- Extra functionalities to this feature will be valued, such as the deletion of highlights, error handling when trying to add repeats and total reset of the highlights.


**Styling**

- The styling of other sections of the App (outside the mandatory styling of the routes based on the theme) will be valued.

**Good Practices**

- Special attention will be paid to the use of best practices, performance improvements (implementing useMemo) and code reuse.

## Functionalities

Ver [Functionalities](docs/funcionalidades.md).

## Development

Ver [Development](docs/desarrollo.md).

## API

The API to use will be the following:
`https://jsonplaceholder.typicode.com/users`

And for each specific dentist:
`https://jsonplaceholder.typicode.com/users/:id`

### Delivery Format

- You should not change the names or locations of the variables/components/context that come with the base repo.

Submission will be accepted by submitting the URL of your cloned repository.

The link to the Google Form for the submission will be sent by the teacher in charge of the commission.

¡Best of luck and success!
