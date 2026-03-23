with open('/home/samuel-yevi/Dev/OFFMODE/premierjs_frmwrk/app/layout.tsx', 'r') as f:
    mc = f.read()

old = '''import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";'''

new = '''import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "@/components/ui/Toast";'''

assert old in mc, "ERREUR: pattern import non trouvé"
mc = mc.replace(old, new)

old_body = '''        {children}
      </body>'''

new_body = '''        {children}
        <ToastContainer position="top-right" />
      </body>'''

assert old_body in mc, "ERREUR: pattern body non trouvé"
mc = mc.replace(old_body, new_body)

with open('/home/samuel-yevi/Dev/OFFMODE/premierjs_frmwrk/app/layout.tsx', 'w') as f:
    f.write(mc)

print("✓ ToastContainer ajouté au layout.")
