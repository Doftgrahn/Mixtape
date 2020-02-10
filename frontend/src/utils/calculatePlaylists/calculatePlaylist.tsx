import React from 'react'

export const calculateHowManySetlists = (setlists: any) => {
  const totalSetlists = setlists.boards.length
  if (totalSetlists === 0) return null
  const ifMoreThanOne = totalSetlists > 1 ? 'setlists' : 'setlist'
  return (
    <p>
      You have {totalSetlists} {ifMoreThanOne}
    </p>
  )
}

export const calculateHowManyInvitedTo = (setlists: any) => {
  const totalCollaborators = setlists.collaborators.length
  const ifMoreThanOne = totalCollaborators > 1 ? 'setlists' : 'setlist'
  if (totalCollaborators === 0) return null
  return (
    <p>
      You are invited to {totalCollaborators} {ifMoreThanOne}
    </p>
  )
}
