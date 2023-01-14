<script>
    import Button from "./Button.svelte";
    
    export let underLabel = undefined;
    export let underLabelColor = 'dark';

    delete $$props.underLabel;
    delete $$props.underLabelColor;
    delete $$props.underLabelColor;
    delete $$props.buttonClickDispatch;
</script>

<div class="button-container">
    <div class="button-wrapper">
        <Button 
            {...$$props}
        />
        <div class="button-under-label {underLabelColor} {$$props.isDisabled? 'disabled' : ''}">{underLabel}</div>
    </div>
</div>

<style>
    .button-container {
        display: inline-block;
    }

    .button-wrapper {
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .button-under-label {
        text-align: center;
        font-size: 1.1rem;
        letter-spacing: 0.04rem;
        cursor: default;
        padding: 0.0rem 0.4rem;
        z-index: 5;
        display: block;
        margin-top: 0.3rem;
        font-weight: 400;
    }

    .button-under-label.light {
        color: var(--gray-800);
    }

    .button-under-label.dark {
        color: var(--gray-200);
    }

    .button-under-label.disabled {
        opacity: 0.65;
    }
</style>