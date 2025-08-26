assignment/
backend/
controllers/
middleware/
models/
routes/
.env
index.js
package.json
frontend/
src/
App.js
App.css
Login.js
Register.js
Notes.js
package.json
README.md

---

## API Endpoints

- `POST /api/auth/register` — Register a new user
- `POST /api/auth/login` — Login and get JWT token
- `GET /api/notes` — Get all notes (protected)
- `POST /api/notes` — Create a note (protected)
- `PUT /api/notes/:id` — Update a note (protected)
- `DELETE /api/notes/:id` — Delete a note (protected)

---

## Sample MongoDB Data

Example of a user document in MongoDB:

```json
{
  "_id": ObjectId("686d32c134deb4ad561f57c4"),
  "name": "Ayushi",
  "email": "ayushitmishra@gmail.com",
  "password": "$2b$10$gdIRMrIxbzbNEViBgha6MOKRYWdRTir/zFOigPztu6cJf1YTNVz2K",
  "createdAt": "2025-07-08T15:01:21.912Z",
  "updatedAt": "2025-07-08T15:01:21.912Z",
  "__v": 0
}
```

