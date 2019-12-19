import React from 'react';
import prince from '../../styling/images/artists/artistPrince.jpg';
import sisters from '../../styling/images/artists/artistSisters.jpg';
import sza from '../../styling/images/artists/artistSza.jpg';

const ArtistBio = () => (

    <>
        <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
            <img className="artistBioImage" src={sza} />
            <div className="artistStages">
                {/* { STAGE INFO } */}
                <p>BIG LOGGER</p>
                <p>22 PM - 23.30 PM</p>
            </div>
            <div className="artistBioText">
                {/* { artist.bio } */}
                <p class="artistPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi blanditiis in eius sunt dignissimos fugit molestiae? Harum, eum, minus ipsum doloremque eos voluptatem possimus nihil cum at maxime tempora.</p>
                <p class="artistPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi numquam nulla fugit dolorem. In, distinctio error quae ullam rem quasi! Atque itaque error sed praesentium, quos, repellendus animi velit blanditiis vitae veritatis, saepe magni quis. Molestias iusto sunt quas accusamus, optio eius ex tenetur, hic, quibusdam magnam sed! Autem debitis repellendus enim natus repellat. Iusto quisquam harum quam consequatur.</p>
            </div>
        </div>
    </>

);

export default ArtistBio;