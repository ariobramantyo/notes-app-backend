# Note APi Spec

## Add Note

Endpoint : POST /notes

Request Body:
```json
{
   "title": "Catatan A",
   "tags": ["Android", "Web"],
   "body": "Isi dari catatan A"
} 
```

Response Body (Success):
```json
{
    "status": "success",
    "message": "Catatan berhasil ditambahkan",
    "data": {
        "noteId": "randomstring"
    }
}
```

Response Body (Failed):
```json
{
    "status": "fail",
    "message": "\"body\" must be a string"
}
```

## Get All Notes

Endpoint : GET /notes

Response Body (Success):
```json
{
    "status": "success",
    "data": {
        "notes": [
            {
                "id": "randomstring",
                "title": "Catatan A",
                "body": "Isi dari catatan A",
                "tags": [
                    "Android",
                    "Web"
                ],
                "createdAt": "2023-10-02T12:20:39.106Z",
                "updatedAt": "2023-10-02T12:20:39.106Z"
            }
        ]
    }
}
```

## Update Note

Endpoint : PUT /notes/{noteId}

Request Body:
```json
{
    "title": "Catatan A Revised",
    "tags": ["Android", "Web"],
    "body": "Isi dari Catatan A Revised"
}
```

Response Body (Success):
```json
{
    "status": "success",
    "message": "Catatan berhasil diubah"
}
```

Response Body (Failed):
```json
{
    "status": "fail",
    "message": "\"body\" must be a string"
}
```

## Delete Note

Endpoint : DELETE /notes/{noteId}

Response Body (Success):
```json
{
    "status": "success",
    "message": "Catatan berhasil dihapus"
}
```

Response Body (Failed):
```json
{
    "status": "fail",
    "message": "Catatan gagal dihapus. Id tidak ditemukan"
}
```