<template>
   <header>
    <nav>
        <ul>
            <l1><NuxtLink to="/">index</NuxtLink></l1>
            <l1><NuxtLink to="/sample">sample</NuxtLink></l1>
            <l1><NuxtLink to="/register">register</NuxtLink></l1>
            <l1><NuxtLink to="/login">login</NuxtLink></l1>
            <l1><NuxtLink to="/captcha">captcha</NuxtLink></l1>
            <l1><NuxtLink to="/weather">weather</NuxtLink></l1>
        </ul>
    </nav>
   </header>
   <div>
    <slot/>
   </div>
</template>
