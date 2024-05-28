from django.urls import path
from . import views

urlpatterns = [
    path("notes/", views.NoteListCreate.as_view(), name="note-list"),
    path("notes/delete/<int:pk>/", views.NoteDelete.as_view(), name="delete-note"),
    path("public-notes/", views.PublicNoteList.as_view(), name="public-note-list"),
    path("my-notes/", views.MyNoteList.as_view(), name="my-note-list"),
]