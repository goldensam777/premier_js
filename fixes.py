with open('/home/samuel-yevi/Dev/OFFMODE/premierjs_frmwrk/components/ui/ColorPicker.tsx', 'r') as f:
    mc = f.read()

old = """      {open && (
        <div className={`absolute top-full left-0 mt-2 z-50 w-64 rounded-2xl
          border ${borderColor} ${bgColor} shadow-xl p-4 flex flex-col gap-3
          animate-in fade-in zoom-in-95 duration-150`}>"""

new = """      {open && (
        <div
          className={`fixed z-[9999] w-64 rounded-2xl
            border ${borderColor} ${bgColor} shadow-xl p-4 flex flex-col gap-3
            animate-in fade-in zoom-in-95 duration-150`}
          style={{
            top:  ref.current?.style.getPropertyValue('--picker-top')  ?? '0px',
            left: ref.current?.style.getPropertyValue('--picker-left') ?? '0px',
          }}
        >"""

assert old in mc, "ERREUR: pattern non trouvé"
mc = mc.replace(old, new)

with open('/home/samuel-yevi/Dev/OFFMODE/premierjs_frmwrk/components/ui/ColorPicker.tsx', 'w') as f:
    f.write(mc)

print("Fix appliqué.")
