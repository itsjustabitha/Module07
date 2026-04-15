"use client"

import Link from 'next/link'
import CustomCard from '../../components/CustomCard'
import BasicGrid from '../../components/BasicGrid'
import MUIForm from '../../components/MUIForm'
import MUIDialog from '../../components/MUIDialog'
import SxExample from '../../components/SxExample'
import BasicUsage from '../../components/BasicUsage'


export default function Dash() {
return (
<div className="Dash">
<h1>Dash</h1>
<p>This is the Dash page.
Nothing to see, go <Link href="/home">home</Link>.</p>


<CustomCard title="Iguana">Green Lizard Card</CustomCard>

<BasicGrid />
<MUIForm />
<MUIDialog/>
<SxExample />
<BasicUsage />
</div>
)}
