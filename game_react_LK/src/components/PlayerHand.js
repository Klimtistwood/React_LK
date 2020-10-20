import React from "react"

const PlayerHand = ({ player, hand, playCard, displayHandOrNot, currentPlayer }) => {

    return (
        <div className="player">
            <div className='avatar' style={{ backgroundImage: "url('" + player.avatar + "')" }}></div>
            <div className="hand">
                {hand.map((card) => {
                    return (
                        // si la valeur de la carte est : "", on ne l'affiche pas 
                        (card.value !== "" ?
                            <div className='card' style={{ backgroundImage: "url('" + (player.isBot === true ? player.verso : player.char) + "')" }} onClick={() => {playCard(card.value, currentPlayer, player.isBot, hand)}}>
                                {() => {displayHandOrNot(card.value, currentPlayer, player.isBot)}}
                            </div> : null)
                    )
                })}
            </div>
        </div>
    )
}

export default PlayerHand;