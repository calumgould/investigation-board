# Investigation Board Foundry Module

## Installation

Enter this as the "Manifest URL" when installing modules on Foundry:
https://github.com/calumgould/investigation-board/releases/latest/download/module.json

## Current Features

## Development

### Local Development

In order to test this without needing to create a new release everytime you'd need to test changes to this module on Foundry, you can create a symlink to the `dist` folder in your Foundry modules.

#### Windows

Open PowerShell as an admin, cd to the root of the project and run:

```shell
New-Item -ItemType SymbolicLink -Target "$(pwd)\dist" -Path "$env:LOCALAPPDATA\FoundryVTT\Data\modules\investigation-board"
```

#### MacOS

s
Open your preferred Terminal client, cd to the root of the project and run:

```
ln -s $PWD/dist $HOME/Library/Application\ Support/FoundryVTT/Data/modules/investigation-board
```

Once this is done, the module should show up in your Foundry client and reflect the code you have locally.

To test any changes you make now, follow the below steps:

1. Close Foundry
2. Run `yarn build:dev` (this will also embed macros as well as running the normal build)
3. Re-open Foundry

Now the module should have updated for your local changes.

### Creating a new release

Update the version in `package.json` and `module.json`

Commit your latest changes, this will automatically generate the `.json` file for the macros.

Go to [Releases](https://github.com/calumgould/investigation-board/releases) and create a new release.

The github workflow should take care of the rest and add the final bundle files to the release once it completes.
