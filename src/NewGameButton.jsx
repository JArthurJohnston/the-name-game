import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { ModalParent } from "./ModalParent";
import { useState } from "react";

export function NewGameButton({ onDone }) {
    const [isOpen, setIsOpen] = useState(false)
    const [newName, setNewName] = useState('')
    const [desc, setDesc] = useState('')
    const [names, setNames] = useState('')

    const close = () => {
        setIsOpen(false)
        setNewName('')
        setNames('')
        setDesc('')
    }

    const splitNames = () => {
        return names.trim().split('\n').filter(e => e)
    }

    const onOk = () => {
        onDone({
            title: newName,
            description: desc,
            names: splitNames()
        })
        close()
    }


    
    return (
        <>
            <Button fullWidth={true} variant="contained" size='large' onClick={() => setIsOpen(true)}>New Game</Button>
            <ModalParent>
                <Dialog  open={isOpen} onClose={() => setIsOpen(false)}>
                    <DialogTitle>New Game</DialogTitle>
                    <DialogContent>
                        <TextField
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                            autoFocus
                            required
                            margin="dense"
                            id="game-title"
                            label="Title"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            value={desc}
                            onChange={(e) => setDesc(e.target.value)}
                            autoFocus
                            margin="dense"
                            id="game-description"
                            label="Description"
                            fullWidth
                            multiline
                            variant="standard"
                            rows={2}
                            maxRows={5}
                        />
                        <TextField
                            value={names}
                            onChange={(e) => setNames(e.target.value)}
                            helperText='Type or paste in your names separated by a new line'
                            autoFocus
                            required
                            margin="dense"
                            id="game-names"
                            label="Names"
                            fullWidth
                            multiline
                            rows={10}
                            maxRows={10}
                            variant='filled'
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={close}>Cancel</Button>
                        <Button onClick={onOk}>Done</Button>
                    </DialogActions>
                </Dialog>
            </ModalParent>
        </>
    )
}

NewGameButton.defaultProps = {
    onDone: () => {}
}
