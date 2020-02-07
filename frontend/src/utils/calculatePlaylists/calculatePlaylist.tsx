import React from 'react'

export const calculateHowManySetlists = (setlists: any) => {
  const totalSetlists = setlists.boards.length
  if (totalSetlists === 0) return null
  const ifMoreThanOne = totalSetlists > 1 ? 'setlists' : 'setlist'
  return (
    <h3>
      You have {totalSetlists} {ifMoreThanOne}
    </h3>
  )
}

export const calculateHowManyInvitedTo = (setlists: any) => {
  const totalCollaborators = setlists.collaborators.length
  const ifMoreThanOne = totalCollaborators > 1 ? 'setlists' : 'setlist'
  if (totalCollaborators === 0) return null
  return (
    <h3>
      You are invited to {totalCollaborators} {ifMoreThanOne}
    </h3>
  )
}
