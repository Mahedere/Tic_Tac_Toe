export default function GameOver({ winner }) {
    return <div id="game-over">
        <h2>Game Over!</h2>
        {winner && <p>{winner}  won!</p>}
        {!winner && <p>{winner}It&apos;s a Draw!</p>}
        <p><button>Rematch!</button></p>
    </div>
}