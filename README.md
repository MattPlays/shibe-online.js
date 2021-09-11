# shibe-online.js
 shibe-online.js utilizes the [shibe-online API](https://shibe.online) to return pictures of dogs, cats and birds

# Installation
```bash
npm i shibe-online.js
```

# Usage
### Javascript
```javascript
const {GetShibe, GetCat, GetBird} = require("shibe-online.js");
GetShibe(1).then(console.log);
GetCat(1).then(console.log);
GetBird(1).then(console.log);
```
### Typescript
```typescript
import {GetShibe, GetCat, GetBird} from "shibe-online.js";
GetShibe(1).then(console.log);
GetCat(1).then(console.log);
GetBird(1).then(console.log);
```

# License
shibe-online.js is Licensed under the [MIT License](https://github.com/MattPlays/shibe-online.js/blob/main/LICENSE)