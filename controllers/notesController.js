exports.getAllNotes = (req, res) => {
    res.status(200).json([{id: '1', title: 'test', text: 'test text!', createdAt: new Date(), modifiedAt: new Date()}])
}

exports.createNote = (req, res) => {
    res.status(200).send({ message: 'Note created successfully'})
}

exports.updateNote = (req, res) => {
    res.status(200).send({ message: 'Note updated successfully'})
}

exports.deleteNote = (req, res) => {
    res.status(200).send({ message: 'Note deleted successfully'})
}

exports.searchNotes = (req, res) => {
    res.status(200).json([{ id: '1', title: 'Sample Note', text: 'This is a sample note.', createdAt: new Date(), modifiedAt: new Date() }]);
};