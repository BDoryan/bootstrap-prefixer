# Bootstrap Prefixer

Ce dépôt vous permet de définir un préfixe devant les classes de Bootstrap. Cela peut être utile pour éviter les conflits de nommage ou pour personnaliser votre utilisation de Bootstrap dans différents projets.

## Pré-requis

L'utilisation de ce projet nécessite Node.js, npm, ainsi que les outils `sass` et `postcss-cli`. Assurez-vous d'avoir ces outils installés sur votre machine. Vous pouvez les installer via npm :

## Configuration

Avant de commencer, vous pouvez personnaliser le préfixe utilisé en modifiant le fichier postcss.config.js. Cherchez la ligne avec prefix: et ajustez la valeur selon vos besoins.

## Utilisation

```bash
npm install -g sass postcss-cli
npm build:css
```