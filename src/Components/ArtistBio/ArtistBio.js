import React from 'react';
import prince from '../../styling/images/artistPrince.jpg';

const ArtistBio = () => (

    <>
        <div className="artistBioBackground artistBioBackgroundPosition artistName" id="artist#">
            <img class="artistBioImage" src={prince} />
            <div class="artistBioText">
                <p class="artistPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero nisi blanditiis in eius sunt dignissimos fugit molestiae? Harum, eum, minus ipsum doloremque eos voluptatem possimus nihil cum at maxime tempora.</p>
                <p class="artistPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quasi numquam nulla fugit dolorem. In, distinctio error quae ullam rem quasi! Atque itaque error sed praesentium, quos, repellendus animi velit blanditiis vitae veritatis, saepe magni quis. Molestias iusto sunt quas accusamus, optio eius ex tenetur, hic, quibusdam magnam sed! Autem debitis repellendus enim natus repellat. Iusto quisquam harum quam consequatur.</p>
                <p class="artistPara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae voluptatem earum minus dolore eos, non explicabo vero esse eveniet necessitatibus fugit voluptate aliquam excepturi saepe odio aut expedita.</p>
            </div>
        </div>
    </>

);

export default ArtistBio;