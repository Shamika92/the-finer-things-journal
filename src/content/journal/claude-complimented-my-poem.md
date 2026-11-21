---
title: "Claude Complimented My Poem, But Did It Understand It?"
dek: "Exploring poetry and emotion with AI, and how they fit together"
seoDescription: "A curtain poem tested on Claude, ChatGPT and Gemini, with Anthropic's emotion vectors, the Porter and Machery study and Sherry Turkle's Eliza Effect."
category: literature
date: 2026-11-22
cover: /images/journal/claude-complimented-my-poem/cover.jpg
coverAlt: "A painting of a woman in a golden dress and a kneeling man in a grey cloak beside a fountain, with handwritten lines and a red starburst drawn over it"
coverFocus: center 35%
keywords: ["Poetry", "AI", "Emotions"]
---

One afternoon, I was trying my hand at poetry just as a hobby and wrote a little piece about a curtain, mostly because it was the first random object sitting right in front of me.

Pretty satisfied with how it turned out, I took it straight to my biggest fan for a review: Claude.

Here is what it read:

<blockquote class="poem">
<p>A curtain sits on the window, flowing and moving with the wind.
Seeing the world through different seasons, catching the dust behind.
It sees me grow older as the years pass by,
Resting in the corner, watching with a quiet sigh.</p>
</blockquote>

Usually, Claude hands out glowing compliments on practically anything I type, so naturally, I expected equally enthusiastic applause. Instead, I got a plain, lukewarm reply, the literary equivalent of a pat on the head.

Slightly offended, I decided to justify myself by overexplaining, trying to get some motivation. I fed Claude the backstory: what I actually meant by the lines, and the emotions and the memory behind them.  I told it how I related it to the childhood home I grew up in, where the curtains that hung for years were put up by my grandmother, how I felt like they had watched generations grow up in that house and still reminded us of the people who used to live there.

And as expected, its tone shifted. Claude came back with a warm, perceptive response that made me feel really understood.

Which left me even more confused: did Claude understand my poem better the second time, or had I simply told it what to feel? If it could articulate emotion so convincingly when prompted, I wondered what kind of poem it would write on its own. So I gave it, and two other AIs, the exact same prompt to write about a Curtain.

## What happens when a writer hasn’t lived?

Across many cultures and centuries, people have reached for poetry when a feeling is too large to say plainly. People read poems when in love and in ache, in weddings and funerals. We write them after death, at births, at the end of things.

A poem works by leaving things out. It gives you a few lines and a lot of space, and you fill that space with your own life. Two people can read the same four lines and feel different things, because each carries a different memory to the gaps. Literary critics have argued for decades that a poem’s meaning is finished by its reader, not its writer.

That is what makes poetry such an interesting test for a machine. The words on the page are only half the poem. The other half usually comes from having lived a life.

<blockquote class="quiet">
<p>So what happens when the reader, or the writer, has no life to bring?</p>
</blockquote>

<blockquote class="quiet">
<p>In the simplest terms, a large language model works by calculating, to the best of its statistical ability, which word fits best after the previous one. That basic job description isn’t far off from what writers and poets do line by line, hunting for the exact word that belongs next.</p>
</blockquote>

But poems are made of feelings as much as words. To guess the next word well, a model has to keep track of feeling too.

Researchers at Anthropic recently looked inside Claude to see how it does that. They took 171 emotion words, from “happy” and “afraid” to “brooding” and “proud”, asked the model to write short stories about each one, and recorded which patterns of activity lit up inside it. They call these patterns *emotion vectors*.

<figure class="warm">
  <a href="/images/journal/claude-complimented-my-poem/emotion-vectors.jpg" target="_blank" rel="noopener" style="cursor:zoom-in" aria-label="Open the full-size image in a new tab"><div class="grain"><img src="/images/journal/claude-complimented-my-poem/emotion-vectors.jpg" alt="Eight panels of story passages with words highlighted in orange where Claude’s emotion vectors activate, headed Afraid, Inspired, Angry, Loving, Calm, Nervous, Desperate and Proud" loading="lazy" /></div></a>
  <figcaption>Passages where Claude’s emotion vectors light up, shown for eight of the 171 emotions. Darker orange means a stronger response. Click the image to open it full size.</figcaption>
</figure>

<blockquote class="quiet">
<p>Imagine the model has read so much human writing that it has sorted feelings onto shelves.</p>
</blockquote>

From enormous amounts of language, it has learned recurring patterns around grief, fear, tenderness and other feelings: “empty chair”, “last time”, “still”. Fear has its own words, and so does tenderness. When a new message arrives, the model notices which shelf those words belong to. Show it a message sent by someone who is sad, and it recognises the “loving” shelf before it replies.

<figure>
  <div class="grain"><img src="/images/journal/claude-complimented-my-poem/emotion-shelves.jpg" alt="A wooden shelf of twelve compartments, each labelled with a feeling (Grief, Love, Tenderness, Fear, Hope, Anger, Nostalgia, Loneliness, Joy, Calm, Curiosity, Awe) and three words that belong to it" loading="lazy" /></div>
  <figcaption>An illustration of the shelves: each feeling collects its own small words.</figcaption>
</figure>

Whichever shelf it recognises shapes what it says next.

So the machine carries a detailed map of human feeling, drawn entirely from what people have written down. Let’s see how it uses this map to write the curtain poem.

## The Curtain test

An LLM can surely generate numerous variations of these, but we’re only taking a sample to make a point.

<blockquote class="poem set">
<cite>Claude</cite>
<p>Turn it over and there are two colours.
The room side is the colour we chose in the shop.
The street side has been paling for years,
one afternoon at a time.</p>
<p style="margin-top:1.3em">Nobody asked it which side it wanted.
It was hung, and the sun did the rest,
and the room stayed the colour of the day we picked it.</p>
<p style="margin-top:1.3em">At night it hangs very still.
With the window open it moves,
on air it didn’t make,
and the whole room remembers the street is there.</p>
<p style="margin-top:1.3em">In the morning a hand
will pull it back along the rod,
and it will fold itself
into the shape of that hand.</p>
</blockquote>

<blockquote class="poem set">
<cite>ChatGPT</cite>
<p>A curtain waves in the breeze,
Dancing softly with the trees.
It opens wide to let light in,
And closes when the night begins. 🌸</p>
</blockquote>

<blockquote class="poem set">
<cite>Gemini</cite>
<p>Soft fabric hanging by the glass,
Watching the sunlit hours pass.
It keeps the quiet shadows near,
And holds the warmth when night is here.</p>
</blockquote>

## So how do these poems rate?

Look at those three attempts next to mine, and two very different strategies emerge.

ChatGPT and Gemini did what most people expect a computer to do: they went with neat, predictable rhymes and stock poetic scenery, breezes, trees, sunlit hours, and a cheerful cherry-blossom emoji. Claude took a different route; it skipped the rhymes altogether and built emotion out of physical facts.

Before deciding which of these actually works as poetry, it helps to look at what happens inside a human being when a poem lands.

For a person, reading or listening to poetry is a physical event. Neuroscientists studying how people respond to recited verse have found that poetry directly stimulates the autonomic nervous system, triggering measurable variations in heart rate, skin conductance, subjective chills, and objectively verifiable goosebumps.

Psychologists call this the paradoxical state of ‘*being moved*’, a bittersweet mixture of sadness and pleasure that hits the body before you even finish interpreting the words.

You might assume that kind of visceral reaction only happens when we read great human poets who have lived through real heartbreak.

That is where the research throws a surprise. In a large study led by Brian Porter and Edouard Machery, everyday readers were given poems written by famous human poets alongside poems generated by AI, without being told which was which. Not only could readers not reliably tell them apart, they actually rated the AI-generated poems higher on beauty, rhythm, and emotional quality.

The reason was simple: the AI poems were clearer, smoother, and easier to follow, much like ChatGPT and Gemini’s tidy verses about sunlit glass and evening warmth. While literary critics argue that great poetry should unsettle us with deep metaphors and difficult ambiguity, ordinary readers often respond more warmly to accessible, comforting lines.

Which raises a question: if a machine’s map of human emotion is good enough to move a real reader, and even earn higher marks than human poets, is there any real difference between a model consulting its emotional shelves and a person actually feeling something?

## Is a map of grief the same as grieving?

The short answer is yes; there is a profound difference, even if it doesn’t always show up on the surface of the page.

When Anthropic’s researchers traced those 171 emotion vectors inside Claude, they found that the model naturally grouped feelings the same way human psychology does, placing joy near excitement, and grief close to shame. Computer scientists call these “functional emotions” because they genuinely steer what the model does next.

<figure class="blend">
  <div class="grain"><img src="/images/journal/claude-complimented-my-poem/emotion-map.jpg" alt="A chart with axes from more negative to more positive and from more calm to more excited, placing Joy and Excitement top right, Love and Calm bottom right, Fear and Sadness top left, Anger and Disgust bottom left" loading="lazy" /></div>
  <figcaption>A simplified illustration of how feelings group by mood and energy.</figcaption>
</figure>

Yet the researchers are quick to draw a hard line: having a functional map of grief is not the same thing as grieving.

Think of a digital synthesizer mimicking a cello. A good synthesizer can produce a rich, aching cello waveform that fools a concert hall because the machine has modeled acoustic frequencies with extreme mathematical precision. The analogy is useful for thinking about what an LLM does with human feeling.


<blockquote class="quiet">
<p>In other words, an AI’s feeling is borrowed; a human poet’s feeling is accumulated.</p>
</blockquote>

Claude learned what nostalgia looks like by digesting millions of sentences written by people who actually missed someone, whereas a human poem comes from having actually lived beside the window.

<blockquote class="quiet">
<p>That brings up a second catch: if everything an AI writes is built from shelves of existing human words, can it ever create anything genuinely new?</p>
</blockquote>

Picture a kaleidoscope. Inside the tube sits a fixed handful of colored glass beads, the model’s training data. Every time you twist the cylinder, mirrors arrange those beads into a symmetrical, dazzling pattern you have never seen before.

In the same way, AI can uncover surprising word combinations that a human writer might never think to pair. Yet as literary critics like Gwee Li Sui point out, a kaleidoscope can never introduce a single bead that wasn’t already inside the chamber. Where human experience hasn’t yet left a trail of words, the machine hits a wall.

<figure class="warm">
  <div class="grain"><img src="/images/journal/claude-complimented-my-poem/kaleidoscope.jpg" alt="The view through a kaleidoscope: coloured glass beads mirrored into a symmetrical pattern of reds, yellows and blues" loading="lazy" /></div>
  <figcaption>Every twist rearranges the same beads into a new pattern.</figcaption>
</figure>

And this brings us right back to the afternoon I showed Claude my poem, and why its second reply felt so kind and understood.

## Why do we still write?

When I first pasted my four lines into Claude without context, it had only the words on the page to work with. Once I added the backstory, I gave it a much richer emotional context to interpret.

Anthropic's experiments offer a glimpse of what can happen in situations like this. When Claude encounters emotionally vulnerable language, representations associated with emotions such as empathy and “loving” can become more active and influence what it says next.

Psychologist Sherry Turkle calls this the Eliza Effect, our deep-seated habit of projecting mind and empathy onto machines that simply echo our own language back to us. When an AI mirrors our memories in graceful, comforting words, it feels like a meeting of minds. In reality, we are looking into a remarkably polished mirror: I brought the soul, and Claude supplied the reflection.

<blockquote class="quiet">
<p>So if machines can now match our fluency, mimic our emotional geometry, and reflect our own feelings back to us on demand, why bother writing poetry at all?</p>
</blockquote>

Because poetry was never really a test of verbal fluency.

Machines can supply all the fluency, rhythm, and symmetry we want, but we never turned to poetry merely to see feelings arranged neatly on a page. We write poems because we are mortal, and we read them to feel less alone in it.

<blockquote class="quiet">
<p>An AI can trace every contour of the human emotional landscape from the outside, yet without a body that ages or a memory that aches, it can never cross that windowpane, leaving the actual living, and the need to make sense of it, entirely to us.</p>
</blockquote>

<p class="credits">Cover: <em>Double Portrait of a Young Couple as Granida and Daifilo</em> by Jan Mijtens, Rijksmuseum (SK-A-1856), public domain, via <a href="https://commons.wikimedia.org/wiki/File:Dubbelportret_van_een_jong_paar_als_Granida_en_Daifilo_Rijksmuseum_SK-A-1856.jpeg">Wikimedia Commons</a>, edited in Canva with handwriting and a Claude logo added. Emotion-vector figure: <a href="https://transformer-circuits.pub/2026/emotions/">Anthropic, Transformer Circuits</a>. Kaleidoscope photo: Hide-sp, <a href="https://commons.wikimedia.org/wiki/File:Kaleidoscope_2.JPG">Wikimedia Commons</a>, CC BY-SA 3.0.</p>
